import tensorflow as tf
from tensorflow.keras import layers
import numpy as np
import pandas as pd
from PIL import Image

# Définition de l'architecture du générateur
def build_generator():
    model = tf.keras.Sequential([
        layers.Dense(256, input_shape=(100,), activation='relu'),
        layers.Dense(512, activation='relu'),
        layers.Dense(1024, activation='relu'),
        layers.Dense(28*28*1, activation='tanh'),
        layers.Reshape((28, 28, 1))
    ])
    return model

# Définition de l'architecture du discriminateur
def build_discriminator():
    image_input = layers.Input(shape=(28, 28, 1))
    desc_input = layers.Input(shape=(100,))
    
    x = layers.Flatten()(image_input)
    x = layers.Dense(512, activation='relu')(x)
    x = layers.Concatenate()([x, desc_input])
    x = layers.Dense(256, activation='relu')(x)
    x = layers.Dense(1, activation='sigmoid')(x)
    
    model = tf.keras.Model(inputs=[image_input, desc_input], outputs=x)
    return model

# Chargement des données
def load_data():
    # Charger les données d'images (mnist)
    (x_train, _), (_, _) = tf.keras.datasets.mnist.load_data()
    # Normaliser les pixels
    x_train = (x_train.astype('float32') - 127.5) / 127.5
    # Ajouter une dimension de canal
    x_train = np.expand_dims(x_train, axis=3)
    # Charger les données de descriptions
    df = pd.read_csv('descriptions.csv')
    descriptions = df['description'].values
    # Transformer les descriptions en vecteurs de nombres
    tokenizer = tf.keras.preprocessing.text.Tokenizer()
    tokenizer.fit_on_texts(descriptions)
    descriptions = tokenizer.texts_to_sequences(descriptions)
    descriptions = np.array(descriptions)
    # Ajouter un padding aux descriptions
    max_length = max(len(desc) for desc in descriptions)
    descriptions = tf.keras.preprocessing.sequence.pad_sequences(descriptions, maxlen=max_length, padding='post')
    return x_train, descriptions, tokenizer

# Création du modèle cGAN
def build_cgan(generator, discriminator):
    desc_input = layers.Input(shape=(100,))
    img_output = generator(desc_input)
    validity_output = discriminator([img_output, desc_input])
    model = tf.keras.Model(inputs=desc_input, outputs=[validity_output, img_output])
    return model

# Entraînement du modèle
def train(x_train, descriptions, generator, discriminator, cgan, batch_size=32, epochs=100, save_interval=10):
    # Préparation des données pour l'entraînement
    dataset = tf.data.Dataset.from_tensor_slices((descriptions, x_train)).shuffle(60000).batch(batch_size)
    # Définition des optimiseurs
    generator_optimizer = tf.keras.optimizers.Adam(learning_rate=0.0002, beta_1=0.5)
    discriminator_optimizer = tf.keras.optimizers.Adam(learning_rate=0.0002, beta_1=0.5)
    # Boucle d'entraînement
    for epoch in range(epochs):
        for i, (desc_batch, image_batch) in enumerate(dataset):
        # Entraînement du discriminateur
            with tf.GradientTape() as tape:
                 generated_images = generator(desc_batch, training=True)
            real_labels = tf.ones((batch_size, 1))
            fake_labels = tf.zeros((batch_size, 1))
            real_scores = discriminator([image_batch, desc_batch], training=True)
            fake_scores = discriminator([generated_images, desc_batch], training=True)
            d_loss_real = tf.keras.losses.BinaryCrossentropy()(real_labels, real_scores)
            d_loss_fake = tf.keras.losses.BinaryCrossentropy()(fake_labels, fake_scores)
            d_loss = d_loss_real + d_loss_fake
            gradients_of_discriminator = tape.gradient(d_loss, discriminator.trainable_variables)
            discriminator_optimizer.apply_gradients(zip(gradients_of_discriminator, discriminator.trainable_variables))
        # Entraînement du générateur
        with tf.GradientTape() as tape:
            generated_images = generator(desc_batch, training=True)
            fake_scores = discriminator([generated_images, desc_batch], training=True)
            g_loss = tf.keras.losses.BinaryCrossentropy()(real_labels, fake_scores)
            gradients_of_generator = tape.gradient(g_loss, generator.trainable_variables)
            generator_optimizer.apply_gradients(zip(gradients_of_generator, generator.trainable_variables))
        # Affichage des résultats
        if i % 100 == 0:
            print('Epoch %d, Batch %d, D_loss: %.4f, G_loss: %.4f' % (epoch+1, i, d_loss, g_loss))
    # Enregistrement des images générées
    if epoch % save_interval == 0:
        generate_images(generator, epoch)
        #Génération d'images à partir de descriptions
    def generate_images(generator, epoch, num_samples=5):
        # Échantillonner des descriptions aléatoires
            noise = np.random.normal(0, 1, (num_samples, 100))
        # Générer des images à partir des descriptions
            generated_images = generator.predict(noise)
        # Créer des images à partir des pixels générés
            generated_images = 0.5 * generated_images + 0.5
            generated_images = np.uint8(255 * generated_images)
            for i in range(num_samples):
                 image = Image.fromarray(generated_images[i, :, :, 0])
                 image.save('generated_images/generated_%d_%d.png' % (epoch, i))

        #Chargement des données
            x_train, descriptions, tokenizer = load_data()

        #Définition de l'architecture du générateur et du discriminateur
            generator = build_generator()
            discriminator = build_discriminator()

        #Création du modèle cGAN
            cgan = build_cgan(generator, discriminator)

        #Entraînement du modèle
            train(x_train, descriptions, generator, discriminator, cgan)
            # Création du modèle cGAN
def build_cgan(generator, discriminator):
    desc_input = layers.Input(shape=(100,))
    img_output = generator(desc_input)
    validity_output = discriminator([img_output, desc_input])
    model = tf.keras.Model(inputs=desc_input, outputs=[validity_output, img_output])
    return model
# Chargement des données
def load_data():
    # Charger les données d'images (mnist)
    (x_train, _), (_, _) = tf.keras.datasets.mnist.load_data()
    # Normaliser les pixels
    x_train = (x_train.astype('float32') - 127.5) / 127.5
    # Ajouter une dimension de canal
    x_train = np.expand_dims(x_train, axis=3)
    # Charger les données de descriptions
    df = pd.read_csv('descriptions.csv')
    descriptions = df['description'].values
    # Transformer les descriptions en vecteurs de nombres
    tokenizer = tf.keras.preprocessing.text.Tokenizer()
    tokenizer.fit_on_texts(descriptions)
    descriptions = tokenizer.texts_to_sequences(descriptions)
    descriptions = np.array(descriptions)
    # Ajouter un padding aux descriptions
    max_length = max(len(desc) for desc in descriptions)
    descriptions = tf.keras.preprocessing.sequence.pad_sequences(descriptions, maxlen=max_length, padding='post')
    return x_train, descriptions, tokenizer
# Définition de l'architecture du discriminateur
def build_discriminator():
    image_input = layers.Input(shape=(28, 28, 1))
    desc_input = layers.Input(shape=(100,))
    
    x = layers.Flatten()(image_input)
    x = layers.Dense(512, activation='relu')(x)
    x = layers.Concatenate()([x, desc_input])
    x = layers.Dense(256, activation='relu')(x)
    x = layers.Dense(1, activation='sigmoid')(x)
    
    model = tf.keras.Model(inputs=[image_input, desc_input], outputs=x)
    return model
# Définition de l'architecture du générateur
def build_generator():
    model = tf.keras.Sequential([
        layers.Dense(256, input_shape=(100,), activation='relu'),
        layers.Dense(512, activation='relu'),
        layers.Dense(1024, activation='relu'),
        layers.Dense(28*28*1, activation='tanh'),
        layers.Reshape((28, 28, 1))
    ])
    return model



           

            