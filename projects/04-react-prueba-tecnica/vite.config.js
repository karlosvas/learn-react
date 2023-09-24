import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})

// El punto de entrada es desde donde comienza la ejecucion de un programa, donde comienzan a jecutarse las acciones de nuestra web.
