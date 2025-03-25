import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Vector Prime Notes App",
    short_name:"VP Notes",
    description:"Your note app that is accessible everywhere you go.",
    icons:[{
      src: '/logo-192x192.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'/logo-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/logo180x180.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/logo-512x512.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#000064',
  background_color:'#ffffff',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})