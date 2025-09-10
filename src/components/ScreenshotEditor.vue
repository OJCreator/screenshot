<template>
  <form class="p-6 space-y-6 mx-auto">

    <h1 class="text-base/7 font-semibold text-gray-900">Screenshot erstellen</h1>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">

      <div class="md:col-span-1 md:col-start-1">
        <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Screenshot</label>
        <div
            @dragover.prevent="screenshotDragging = true"
            @dragleave.prevent="screenshotDragging = false"
            @dragenter.prevent="screenshotDragging = false"
            @drop.prevent="onDropScreenshot" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" :class="screenshotDragging ? ['border-indigo-500'] : []">
          <div class="text-center">
            <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="mx-auto size-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z"/></svg>
            </svg>
            <div class="mt-4 flex text-sm/6 text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                <span>Datei auswählen</span>
                <input @change="onScreenshotUploaded" id="file-upload" type="file" name="file-upload" class="sr-only" />
              </label>
              <p class="pl-1">oder drag and drop</p>
            </div>
            <p class="text-xs/5 text-gray-600">PNG, JPG, JPEG bis 10MB</p>
          </div>
        </div>
      </div>

      <div class="md:col-span-1">
        <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Schriftart</label>
        <div
            @dragover.prevent="fontDragging = true"
            @dragleave.prevent="fontDragging = false"
            @dragenter.prevent="fontDragging = false"
            @drop.prevent="onDropFont" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" :class="fontDragging ? ['border-indigo-500'] : []">
          <div class="text-center">
            <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="mx-auto size-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M349.1 114.7C343.9 103.3 332.5 96 320 96C307.5 96 296.1 103.3 290.9 114.7L123.5 480L112 480C94.3 480 80 494.3 80 512C80 529.7 94.3 544 112 544L200 544C217.7 544 232 529.7 232 512C232 494.3 217.7 480 200 480L193.9 480L215.9 432L424.2 432L446.2 480L440.1 480C422.4 480 408.1 494.3 408.1 512C408.1 529.7 422.4 544 440.1 544L528.1 544C545.8 544 560.1 529.7 560.1 512C560.1 494.3 545.8 480 528.1 480L516.6 480L349.2 114.7zM394.8 368L245.2 368L320 204.8L394.8 368z"/></svg>
            </svg>
            <div class="mt-4 flex text-sm/6 text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                <span>Datei auswählen</span>
                <input @change="onFontUploaded" id="file-upload" type="file" name="file-upload" class="sr-only" />
              </label>
              <p class="pl-1">oder drag and drop</p>
            </div>
            <p class="text-xs/5 text-gray-600">TTF bis 1MB</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">

      <div class="sm:col-span-1 sm:col-start-1">
        <label for="backgroundColor" class="block text-sm/6 font-medium text-gray-900">Hintergrundfarbe</label>
        <div class="mt-2">
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">#</div>
            <input id="backgroundColor" v-model="backgroundColor" type="text" name="backgroundColor" placeholder="FB08AC" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
          </div>
        </div>
      </div>

      <div class="sm:col-span-1">
        <label for="textColor" class="block text-sm/6 font-medium text-gray-900">Textfarbe</label>
        <div class="mt-2">
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">#</div>
            <input id="textColor" v-model="textColor" type="text" name="textColor" placeholder="FB08AC" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
          </div>
        </div>
      </div>

      <div class="sm:col-span-1">
        <label for="phoneColor" class="block text-sm/6 font-medium text-gray-900">Handyfarbe</label>
        <div class="mt-2">
          <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">#</div>
            <input id="phoneColor" v-model="phoneColor" type="text" name="phoneColor" placeholder="FB08AC" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-full">
      <label for="about" class="block text-sm/6 font-medium text-gray-900">Text</label>
      <div class="mt-2">
        <input v-model="text" id="about" name="about" placeholder="Mein Text..." class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></input>
      </div>
    </div>


    <img :src="outputFile" alt="screenshot.png" class="border border-gray-300 rounded h-[280px] w-auto mx-auto relative flex justify-center items-center">




    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm/6 font-semibold text-gray-900">Zurücksetzen</button>
      <button @click="download" type="button"  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">PNG herunterladen</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import html2canvas from 'html2canvas'
import ScreenshotTypes from './ScreenshotTypes.ts'

const screenshotDragging = ref(false)
const fontDragging = ref(false)

const screenshot = ref(null)
const backgroundColor = ref("020479") //ref('FFF0D1')
const textColor = ref('FFFFFF')
const phoneColor = ref('FFFFFF')
const text = ref('Mein Text')
const font = ref('Verdana')

const outputFile = ref("")

// Einzelne Refs beobachten
watch(screenshot, buildOutputFile)
watch(backgroundColor, buildOutputFile)
watch(textColor, buildOutputFile)
watch(phoneColor, buildOutputFile)
watch(text, buildOutputFile)

// Screenshot-Input
function onDropScreenshot(e) {
  screenshotDragging.value = false;
  if (!e.dataTransfer?.files.length) return
  handleNewScreenshot(e.dataTransfer.files[0])
}
function onScreenshotUploaded(e) {
  handleNewScreenshot(e.target.files[0])
}
function handleNewScreenshot(file) {
  if (!file) return
  if (!file.name.toLowerCase().endsWith('.png') && !file.name.toLowerCase().endsWith('.jpg') && !file.name.toLowerCase().endsWith('.jpeg')) {
    alert('Bitte eine Datei mit Endung PNG, JPG oder JPEG hochladen.')
    return
  }
  const maxSizeMB = 1
  if (file.size > maxSizeMB * 1024 * 1024) {
    alert(`Datei ist zu groß. Maximal ${maxSizeMB} MB erlaubt.`)
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => screenshot.value = e.target.result
  reader.readAsDataURL(file)
}

// FONT
function onDropFont(e) {
  fontDragging.value = false;
  if (!e.dataTransfer?.files.length) return
  handleNewFont(e.dataTransfer.files[0])
}
function onFontUploaded(e) {
  handleNewFont(e.target.files[0])
}
async function handleNewFont(file) {
  if (!file) return
  if (!file.name.toLowerCase().endsWith('.ttf')) {
    alert('Bitte eine TTF-Datei hochladen.')
    return
  }
  const maxSizeMB = 1
  if (file.size > maxSizeMB * 1024 * 1024) {
    alert(`Datei ist zu groß. Maximal ${maxSizeMB} MB erlaubt.`)
    return
  }

  const arrayBuffer = await file.arrayBuffer()

  // FontFace erstellen und registrieren
  const fontFace = new FontFace("UserFont", arrayBuffer)
  await fontFace.load()
  document.fonts.add(fontFace)

  font.value = "UserFont"

  await buildOutputFile();
}





async function buildOutputFile() {

  const screenshotType = ScreenshotTypes.LS_BOTTOM;

  // Container in Originalgröße erstellen
  const exportDiv = document.createElement('div')
  exportDiv.style.width = screenshotType.imgWidth + 'px'
  exportDiv.style.height = screenshotType.imgHeight + 'px'
  exportDiv.style.position = 'absolute'
  exportDiv.style.top = '-9999px'
  exportDiv.style.left = '0'
  exportDiv.style.backgroundColor = "#" + backgroundColor.value

  // Screenshot
  if (screenshot.value != null) {
    const shotImg = document.createElement('img')
    shotImg.src = screenshot.value
    shotImg.style.position = 'absolute'
    shotImg.style.width = screenshotType.screenshotWidth + "px"
    shotImg.style.height = screenshotType.screenshotHeight + "px"
    shotImg.style.left = screenshotType.phoneLeft
    shotImg.style.top = screenshotType.phoneTop
    shotImg.style.transform = screenshotType.phoneTransform + "scale(0.95)"
    shotImg.style.borderRadius = '75px'
    exportDiv.appendChild(shotImg)
  }

  // Handy (1224 x 612)
  const phoneCanvas = await new Promise(resolve => {
    createColoredPhone(screenshotType.phoneFilename, phoneColor.value, resolve)
  });
  phoneCanvas.style.position = 'absolute'
  phoneCanvas.style.width = screenshotType.screenshotWidth + "px"
  phoneCanvas.style.height = screenshotType.screenshotHeight + "px"
  phoneCanvas.style.left = screenshotType.phoneLeft
  phoneCanvas.style.top = screenshotType.phoneTop
  phoneCanvas.style.transform = screenshotType.phoneTransform
  exportDiv.appendChild(phoneCanvas)


  // Text
  const textDiv = document.createElement('div')
  textDiv.innerText = text.value
  textDiv.style.position = 'absolute'
  textDiv.style.width = screenshotType.textWidth
  textDiv.style.left = screenshotType.textLeft
  textDiv.style.top = screenshotType.textTop
  textDiv.style.right = screenshotType.textRight
  textDiv.style.bottom = screenshotType.textBottom
  textDiv.style.transform = screenshotType.textTransform
  textDiv.style.textAlign = screenshotType.textAlign
  textDiv.style.fontFamily = font.value
  textDiv.style.color = "#" + textColor.value
  textDiv.style.fontSize = "120px"
  exportDiv.appendChild(textDiv)

  document.body.appendChild(exportDiv)

  html2canvas(exportDiv, {width: screenshotType.imgWidth, height: screenshotType.imgHeight, scale: 1}).then(canvas => {
    outputFile.value = canvas.toDataURL('image/png')
    document.body.removeChild(exportDiv)
  })
}

/**
 * Lädt ein PNG, ersetzt weiße Pixel durch die gewünschte Farbe und gibt ein Canvas zurück
 * @param {string} imgSrc - Pfad zum PNG
 * @param {string} color - Farbe z.B. "#FF0000"
 * @param {function(HTMLCanvasElement): void} callback - Wird aufgerufen, wenn das Canvas fertig ist
 */
function createColoredPhone(imgSrc, color, callback) {
  const img = new Image()
  img.src = imgSrc
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    const rgb = hexToRgb(color)

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i+1]
      const b = data[i+2]
      const a = data[i+3]

      // Weiße Pixel ersetzen (hell genug + nicht transparent)
      if (r > 200 && g > 200 && b > 200 && a > 0) {
        data[i] = rgb.r
        data[i+1] = rgb.g
        data[i+2] = rgb.b
      }
    }

    ctx.putImageData(imageData, 0, 0)
    callback(canvas)
  }
}

// Hilfsfunktion Hex → RGB
function hexToRgb(hex) {
  if (hex.startsWith('#')) {
    hex = hex.replace(/^#/, '')
  }
  return {
    r: parseInt(hex.substr(0,2),16),
    g: parseInt(hex.substr(2,2),16),
    b: parseInt(hex.substr(4,2),16)
  }
}


function download() {
  const link = document.createElement('a')
  link.download = 'screenshot.png'
  link.href = outputFile.value;
  link.click()
}


buildOutputFile();

</script>
