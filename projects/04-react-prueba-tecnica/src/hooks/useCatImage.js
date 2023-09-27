'use strict'

import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImgURL] = useState()

    // Para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        const threeFistWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFistWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImgURL(url)
            })
    }, [fact])
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}