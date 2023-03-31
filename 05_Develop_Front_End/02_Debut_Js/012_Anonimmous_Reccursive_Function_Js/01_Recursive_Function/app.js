function loading (percent) {
    while (percent < 100) {
    percent++
    }
    console.log('Chargement terminé !')
    }
    
    function loadingRecursive (percent) {
    if (percent < 100) {
    percent++
    loadingRecursive(percent)
    } else {
    console.log('Chargement terminé !')
    }
    }
    
    loading(0)
    loadingRecursive(0)



    