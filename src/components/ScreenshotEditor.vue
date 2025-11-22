<template>

  <div class="bg-white pt-18 pb-24 sm:pt-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Screenshot Generator</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Erstelle kostenlos deinen Screenshot für Google Play oder den Apple App Store</p>
      </div>


      <form class="mt-10 pt-10 mx-auto max-w-2xl gap-x-5 gap-y-16 border-t border-gray-200 sm:mt-12 sm:pt-12 lg:mx-0 lg:max-w-none">

        <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">Orientierung</legend>
            <p class="mt-1 text-sm/6 text-gray-600">Welche Orientierung soll dein Screenshot haben?</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="portrait" type="radio" name="orientation" v-model="orientation" :value="'portrait'" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="portrait" class="block text-sm/6 font-medium text-gray-900">Vertikal</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="landscape" type="radio" name="orientation" v-model="orientation" :value="'landscape'" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="landscape" class="block text-sm/6 font-medium text-gray-900">Horizontal</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="featureGraphic" type="radio" name="orientation" v-model="orientation" :value="'featureGraphic'" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="featureGraphic" class="block text-sm/6 font-medium text-gray-900">Vorstellungsgrafik</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">Handy-Platzierung</legend>
            <p class="mt-1 text-sm/6 text-gray-600">Wo soll sich das Handy befinden?</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="left" type="radio" v-model="phonePlacement" :value="'left'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'left')" name="phonePlacement" checked class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="left" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Links</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="top" type="radio" v-model="phonePlacement" :value="'top'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'top')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="top" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Oben</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="right" type="radio" v-model="phonePlacement" :value="'right'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'right')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="right" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Rechts</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="bottom" type="radio" v-model="phonePlacement" :value="'bottom'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'bottom')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="bottom" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Unten</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="middle" type="radio" v-model="phonePlacement" :value="'middle'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'middle')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="middle" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Mitte</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="tilted1" type="radio" v-model="phonePlacement" :value="'tilted1'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'tilted1')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="tilted1" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Gekippt (1)</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="tilted2" type="radio" v-model="phonePlacement" :value="'tilted2'" :disabled="ScreenshotTypes.values.every((value) => value.orientation != orientation || value.phonePlacement != 'tilted2')" name="phonePlacement" class="peer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="tilted2" class="block text-sm/6 font-medium text-gray-900 peer-disabled:text-gray-400">Gekippt (2)</label>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="mt-10 pt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-gray-200 sm:mt-12 sm:pt-12" :class="getCurrentScreenshotType()?.twoScreenshots ? ['md:grid-cols-3'] : ['md:grid-cols-2']">

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

          <div class="md:col-span-1" v-if="getCurrentScreenshotType()?.twoScreenshots">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Screenshot 2</label>
            <div
                @dragover.prevent="screenshot2Dragging = true"
                @dragleave.prevent="screenshot2Dragging = false"
                @dragenter.prevent="screenshot2Dragging = false"
                @drop.prevent="onDropSecondScreenshot" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" :class="screenshot2Dragging ? ['border-indigo-500'] : []">
              <div class="text-center">
                <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="mx-auto size-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z"/></svg>
                </svg>
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                    <span>Datei auswählen</span>
                    <input @change="onSecondScreenshotUploaded" id="file-upload" type="file" name="file-upload" class="sr-only" />
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

        <div class="mt-10 pt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-gray-200 sm:mt-12 sm:pt-12 md:grid-cols-3">

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


        <div class="mt-10 pt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 border-t border-gray-200 sm:mt-12 sm:pt-12 md:grid-cols-3">

          <div class="sm:col-span-1 sm:col-start-1">
            <label for="text" class="block text-sm/6 font-medium text-gray-900">Text</label>
            <div class="mt-2">
              <textarea v-model="text" id="text" name="text" placeholder="Mein Text..." class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>


          <div class="sm:col-span-1">
            <label for="wordSpacing" class="block text-sm/6 font-medium text-gray-900">Word-Spacing</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input id="wordSpacing" v-model="wordSpacing" type="number" name="wordSpacing" placeholder="FB08AC" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 mr-3">em</div>
              </div>
            </div>
          </div>


          <div class="sm:col-span-1">
            <label for="textSize" class="block text-sm/6 font-medium text-gray-900">Textgröße</label>
            <div class="mt-2">
              <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input id="textSize" v-model="textSize" type="number" name="textSize" placeholder="FB08AC" class="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 mr-3">Punkt</div>
              </div>
            </div>
          </div>


          <div class="sm:col-span-1">
            <label for="about" class="block text-sm/6 font-medium text-gray-900">Textausrichtung</label>
            <div id="Ausrichtung" class="mt-2 inline-flex rounded-xl shadow">
              <!-- Links -->
              <button @click="textAlignment = 'left'" type="button" class="px-3 py-2 border border-gray-300 rounded-l-xl" :class="textAlignment == 'left' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h10M4 14h16M4 18h10" />
                </svg>
              </button>
              <!-- Zentriert -->
              <button @click="textAlignment = 'center'" type="button" class="px-3 py-2 border-t border-r border-b border-gray-300" :class="textAlignment == 'center' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M8 10h8M4 14h16M8 18h8" />
                </svg>
              </button>
              <!-- Rechts -->
              <button @click="textAlignment = 'right'" type="button" class="px-3 py-2 border-t border-b border-gray-300" :class="textAlignment == 'right' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M10 10h10M4 14h16M10 18h10" />
                </svg>
              </button>
              <!-- Rechts -->
              <button @click="textAlignment = 'justify'" type="button" class="px-3 py-2 border border-gray-300 rounded-r-xl" :class="textAlignment == 'justify' ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          <div class="sm:col-span-1 sr-only">
            <label class="block text-sm/6 font-medium text-gray-900">Vertikale Ausrichtung</label>
            <div id="VertikaleAusrichtung" class="mt-2 inline-flex rounded-xl shadow">
              <!-- Oben -->
              <button
                  @click="verticalAlignment = 'top'"
                  type="button"
                  class="px-3 py-2 border border-gray-300 rounded-l-xl"
                  :class="verticalAlignment == 'top'
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
              : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="3" width="16" height="4" rx="1" fill="currentColor"/>
                  <line x1="12" y1="10" x2="12" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

              <!-- Mitte -->
              <button
                  @click="verticalAlignment = 'middle'"
                  type="button"
                  class="px-3 py-2 border-t border-b border-gray-300"
                  :class="verticalAlignment == 'middle'
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
              : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="10" width="16" height="4" rx="1" fill="currentColor"/>
                  <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

              <!-- Unten -->
              <button
                  @click="verticalAlignment = 'bottom'"
                  type="button"
                  class="px-3 py-2 border border-gray-300 rounded-r-xl"
                  :class="verticalAlignment == 'bottom'
              ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
              : 'bg-white hover:bg-gray-100 text-gray-700'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="4" y="17" width="16" height="4" rx="1" fill="currentColor"/>
                  <line x1="12" y1="3" x2="12" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>

            </div>
          </div>
        </div>



        <div class="mt-10 pt-10 border-t border-gray-200 sm:mt-12 sm:pt-12 md:grid-cols-3">

          <img
              v-if="!generatingOutputFiles"
              :src="outputFile"
              :alt="`screenshot.png`"
              class="border border-gray-300 rounded h-[280px] w-auto mx-auto relative flex justify-center items-center"
          />
          <div
              v-if="generatingOutputFiles"
              class="border border-gray-300 rounded h-[280px] animate-pulse bg-gray-300 mx-auto relative flex justify-center items-center"
              :style="getCurrentScreenshotType() ? { width: `${getCurrentScreenshotType()!.imgWidth * 280 / getCurrentScreenshotType()!.imgHeight}px` }: ''"
          />
        </div>



        <div class="fixed bottom-4 right-4 flex items-center justify-end gap-x-6 bg-white rounded-lg border-2 border-gray-600 p-3">
          <button @click="reset" type="button" class="rounded-md bg-gray-500 text-white px-3 py-2 text-sm font-semibold shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Zurücksetzen</button>
          <button @click="download" type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">PNG herunterladen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import html2canvas from 'html2canvas'
import {ScreenshotType, ScreenshotTypes} from './ScreenshotTypes.ts'

const screenshotDragging = ref<boolean>(false)
const screenshot2Dragging = ref<boolean>(false)
const fontDragging = ref<boolean>(false)

const orientation = ref<"portrait" | "landscape">("portrait")
const phonePlacement = ref<string>("bottom")

const screenshot = ref<string | null>(null)
const screenshot2 = ref<string | null>(null)
const backgroundColor = ref<string>("456789")
const textColor = ref<string>('FFFFFF')
const phoneColor = ref<string>('FFFFFF')
const text = ref<string>('Mein Text')
const wordSpacing = ref<number>(0.25)
const textSize = ref<number>(120)
const font = ref<string>('Verdana')
const textAlignment = ref<string>('left')
const verticalAlignment = ref<string>('top')

const generatingOutputFiles = ref<boolean>(true);
const outputFile = ref<string>("")

watch(orientation, () => setTextAlignToDefault())
watch(phonePlacement, () => setTextAlignToDefault())
watch(screenshot, () => buildAllOutputFiles())
watch(screenshot2, () => buildAllOutputFiles())
watch(backgroundColor, () => buildAllOutputFiles())
watch(textColor, () => buildAllOutputFiles())
watch(phoneColor, () => buildAllOutputFiles())
watch(text, () => buildAllOutputFiles())
watch(wordSpacing, () => buildAllOutputFiles())
watch(textSize, () => buildAllOutputFiles())
watch(textAlignment, () => buildAllOutputFiles())
watch(font, () => buildAllOutputFiles())

// Screenshot-Input
function onDropSecondScreenshot(e: DragEvent): void {
  return onDropScreenshot(e, true);
}
function onDropScreenshot(e: DragEvent, isSecondScreenshot: boolean = false): void {
  screenshot2Dragging.value = false;
  screenshotDragging.value = false;
  if (!e.dataTransfer?.files.length) return
  handleNewScreenshot(e.dataTransfer.files[0], isSecondScreenshot)
}
function onSecondScreenshotUploaded(e: Event): void {
  return onScreenshotUploaded(e, true);
}
function onScreenshotUploaded(e: Event, isSecondScreenshot: boolean = false): void {
  const target = e.target as HTMLInputElement
  if (!target.files?.length) return
  handleNewScreenshot(target.files[0], isSecondScreenshot)
}
function handleNewScreenshot(file: File, isSecondScreenshot: boolean = false): void {
  if (!file) return
  if (!file.name.toLowerCase().endsWith('.png') && !file.name.toLowerCase().endsWith('.jpg') && !file.name.toLowerCase().endsWith('.jpeg')) {
    alert('Bitte eine Datei mit Endung PNG, JPG oder JPEG hochladen.')
    return
  }
  const maxSizeMB = 10
  if (file.size > maxSizeMB * 1024 * 1024) {
    alert(`Datei ist zu groß. Maximal ${maxSizeMB} MB erlaubt.`)
    return
  }
  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    if (e.target?.result) {
      if (isSecondScreenshot) {
        screenshot2.value = e.target.result as string
      } else {
        screenshot.value = e.target.result as string
      }
    }
  }
  reader.readAsDataURL(file)
}

// FONT
function onDropFont(e: DragEvent): void {
  fontDragging.value = false;
  if (!e.dataTransfer?.files.length) return
  handleNewFont(e.dataTransfer.files[0])
}
function onFontUploaded(e: Event): void {
  const target = e.target as HTMLInputElement
  if (!target.files?.length) return
  handleNewFont(target.files[0])
}
async function handleNewFont(file: File): Promise<void> {
  if (!file) return
  if (!file.name.toLowerCase().endsWith('.ttf')) {
    alert('Bitte eine TTF-Datei hochladen.')
    return
  }
  const maxSizeMB = 1;
  if (file.size > maxSizeMB * 1024 * 1024) {
    alert(`Datei ist zu groß. Maximal ${maxSizeMB} MB erlaubt.`);
    return;
  }

  const arrayBuffer = await file.arrayBuffer();

  // FontFace erstellen und registrieren
  const fontFace = new FontFace("UserFont", arrayBuffer);
  await fontFace.load();
  document.fonts.add(fontFace);

  font.value = "UserFont";
}

async function setTextAlignToDefault(): Promise<void> {
  textAlignment.value = getCurrentScreenshotType()?.textAlign!;
  await buildAllOutputFiles();
}


async function buildAllOutputFiles(): Promise<void> {
  generatingOutputFiles.value = true;
  await buildOutputFile();
  generatingOutputFiles.value = false;
}

function getCurrentScreenshotType(): ScreenshotType | undefined {
  return ScreenshotTypes.values.find((value) => value.orientation == orientation.value && value.phonePlacement == phonePlacement.value);
}

async function buildOutputFile(): Promise<void> {

  const screenshotType: ScreenshotType | undefined = getCurrentScreenshotType();
  if (!screenshotType) return;

  // Stelle sicher, dass alle Fonts geladen sind
  await document.fonts.ready;

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
    shotImg.style.transform = screenshotType.phoneTransform + "scale(0.99)"
    shotImg.style.borderRadius = ((screenshotType.screenshotWidth + screenshotType.screenshotHeight) / 23) + 'px'
    exportDiv.appendChild(shotImg)
  }

  // Handy (1224 x 612)
  const phoneCanvas: HTMLCanvasElement = await new Promise(resolve => {
    createColoredPhone(screenshotType.phoneFilename, phoneColor.value, resolve)
  });
  phoneCanvas.style.position = 'absolute'
  phoneCanvas.style.height = screenshotType.screenshotHeight + "px"
  phoneCanvas.style.left = screenshotType.phoneLeft
  phoneCanvas.style.top = screenshotType.phoneTop
  phoneCanvas.style.transform = screenshotType.phoneTransform
  exportDiv.appendChild(phoneCanvas)

  // 2. Screenshot
  if (screenshotType.twoScreenshots) {
    if (screenshot2.value != null) {
      const shot2Img = document.createElement('img')
      shot2Img.src = screenshot2.value
      shot2Img.style.position = 'absolute'
      shot2Img.style.width = screenshotType.screenshot2Width! + "px"
      shot2Img.style.height = screenshotType.screenshot2Height! + "px"
      shot2Img.style.left = screenshotType.phone2Left!
      shot2Img.style.top = screenshotType.phone2Top!
      shot2Img.style.transform = screenshotType.phone2Transform! + "scale(0.99)"
      shot2Img.style.borderRadius = ((screenshotType.screenshot2Width! + screenshotType.screenshot2Height!) / 23) + 'px'
      exportDiv.appendChild(shot2Img)
    }

    // Handy (1224 x 612)
    const phone2Canvas: HTMLCanvasElement = await new Promise(resolve => {
      createColoredPhone(screenshotType.phone2Filename!, phoneColor.value, resolve)
    });
    phone2Canvas.style.position = 'absolute'
    phone2Canvas.style.height = screenshotType.screenshot2Height! + "px"
    phone2Canvas.style.left = screenshotType.phone2Left!
    phone2Canvas.style.top = screenshotType.phone2Top!
    phone2Canvas.style.transform = screenshotType.phone2Transform!
    exportDiv.appendChild(phone2Canvas)
  }


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
  textDiv.style.textAlign = textAlignment.value
  textDiv.style.fontFamily = font.value
  textDiv.style.color = "#" + textColor.value
  textDiv.style.fontSize = textSize.value + "px"
  exportDiv.style.wordSpacing = wordSpacing.value + "em";
  exportDiv.appendChild(textDiv)

  document.body.appendChild(exportDiv)

  await html2canvas(exportDiv, {width: screenshotType.imgWidth, height: screenshotType.imgHeight, scale: 1}).then(canvas => {
    outputFile.value = canvas.toDataURL('image/png');
    document.body.removeChild(exportDiv);
  })
}

/**
 * Lädt ein PNG, ersetzt weiße Pixel durch die gewünschte Farbe und gibt ein Canvas zurück
 * @param {string} imgSrc - Pfad zum PNG
 * @param {string} color - Farbe z.B. "#FF0000"
 * @param {function(HTMLCanvasElement): void} callback - Wird aufgerufen, wenn das Canvas fertig ist
 */
function createColoredPhone(imgSrc: string, color: string, callback: (canvas: HTMLCanvasElement) => void): void {
  const img = new Image()
  img.src = imgSrc
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')

    if (!ctx) return

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

    ctx?.putImageData(imageData, 0, 0)
    callback(canvas)
  }
}

// Hilfsfunktion Hex → RGB
function hexToRgb(hex: string) {
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
  const link = document.createElement('a');
  link.download = 'screenshot.png';
  link.href = outputFile.value;
  link.click();
}
function reset() {
  screenshotDragging.value = false;
  fontDragging.value = false;

  screenshot.value = null;
  screenshot2.value = null;
  backgroundColor.value = "456789";
  textColor.value = 'FFFFFF';
  phoneColor.value = 'FFFFFF';
  text.value = 'Mein Text';
  font.value = 'Verdana';
}

setTextAlignToDefault();
buildAllOutputFiles();

</script>
