export const loadInstallation = () => {
    try{
        const data = localStorage.getItem('installation')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err);
        
        return[]
    }
}

export const updateList = app => {
    const installation = loadInstallation()

    try{
        const isDuplicate = installation.some(a => a.id === app.id)
        if (isDuplicate) return alert('Allready add install')
            const updatedInstallation = [...installation, app]
        localStorage.setItem('installation', JSON.stringify(updatedInstallation))
    } catch (err) {
        console.log(err);
        
    }
}

export const removeFromInstallation = id => {
    const installation = loadInstallation()

    try{
        const updatedInstallation = installation.filter(a => a.id !== id)
        localStorage.setItem('installation', JSON.stringify(updatedInstallation))
    } catch (err) {
        console.log(err);
        
    }
}