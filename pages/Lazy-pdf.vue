<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/creations">Creations</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem href="https://bookmarks.kejk.tech" extLink>
        <span class="flex items-center">
          Bookmarks
          <arrow-up-right-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></arrow-up-right-icon>
        </span>
      </NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="mx-auto px-4">
      <div class="container mx-auto max-w-3xl pt-10 pb-2">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="home"> Back home </BackLink>
        </div>
        <Header class="pt-4 text-left md:text-center">/lazy-pdf</Header>
        <Subheader>
          <template #text>
            Effortless and interfaceless PDF creation.
          </template>
        </Subheader>
        <div>
          <img
            :src="`${hero}`"
            class="mt-10"
            alt="image of Lazy PDF app in use"
          />
        </div>
        <div class="py-4">
          <div>
            <div class="mt-8 mb-8 space-y-4">
              <h3
                class="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Simple and invisible
              </h3>
              <p class="text-neutral-700 dark:text-neutral-400">
                Effortlessly create a PDF from a set of selected images through
                an interfaceless system with only the Finder selection UI.
              </p>
            </div>
            <div
              class="flex flex-col justify-center md:flex-row md:justify-start"
            >
              <a :href="`${download.url}`" class="no-underline">
                <Button
                  color="purple"
                  id="DOWNLOAD"
                  @click="plausible('Downloaded Lazy PDF')"
                >
                  <template #icon>
                    <download-icon
                      size="1x"
                      class="mr-2 inline-block text-purple-100"
                    />
                  </template>
                  <template #label>
                    {{ download.text }}
                  </template>
                </Button>
              </a>
            </div>
            <Divider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Grab and go
              </h3>
              <p class="text-neutral-700 dark:text-neutral-400">
                Lazy PDF is deliberately designed to be simple and have a low
                overhead, to make it easier to grab a set of design files and
                throw them together into a PDF.
              </p>
              <img
                class="pt-4 dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"
              />
            </div>
            <Divider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                On your terms
              </h3>
              <p class="text-neutral-700 dark:text-neutral-400">
                Your logical file order is always respected, so number your
                files if you want to order in sequence, otherwise, move them
                around afterwards in any PDF viewer.
              </p>
              <img
                class="pt-4 dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png"
              />
            </div>
            <Divider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Lossless
              </h3>
              <p class="text-neutral-700 dark:text-neutral-400">
                Respecting your image sizes, Lazy PDF doesn't try to compress
                everything to printable sizes, ideal for sharing work with
                teammates and management.
              </p>
              <img
                class="pt-4 dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"
              />
            </div>
            <Divider />
            <div class="mb-8 space-y-4">
              <h3
                class="text-2xl font-bold text-neutral-900 dark:text-neutral-50"
              >
                Better than native
              </h3>
              <p class="text-neutral-700 dark:text-neutral-400">
                macOS' native 1-click PDF creation (left) pushes all files into
                a printable page collection, Lazy PDF (right) leaves your images
                alone. Perfect for long design files such as mobile layouts, or
                ultrawide files when visualising a 21:9 video concept.
              </p>
              <img
                class="pt-4 dark:ring-2 dark:ring-neutral-800"
                src="https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png"
              />
            </div>
          </div>
        </div>
        <Divider />
        <H2Header id="GET_IN_TOUCH">How to reach me</H2Header>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { DownloadIcon, ArrowUpRightIcon } from "vue-feather-icons";

export default {
  name: "Lazy-PDF",
  components: {
    DownloadIcon,
    ArrowUpRightIcon,
  },
  computed: {
    meta() {
      const metaData = {
        title: "Lazy PDF | KEJK",
        description: "Effortless and interfaceless PDF creation.",
        url: "https://kejk.tech/lazy-pdf",
        mainImage:
          "https://imgix.cosmicjs.com/7cd58970-9279-11ec-9a4e-05fc85d83574-kmeta.png",
      };
      return getSiteMeta(metaData);
    },
  },
  head() {
    return {
      title: "Lazy PDF | KEJK",
      meta: [...this.meta],
      link: [{ rel: "canonical", href: "https://kejk.tech/lazy-pdf" }],
    };
  },
  data() {
    return {
      download: {
        url: "https://cdn.cosmicjs.com/96c86440-9717-11ec-8bb7-91577e4f4933-Lazy-PDF.zip",
        text: "Download",
      },
      hero: "https://imgix.cosmicjs.com/d2653530-77ca-11ec-bfef-718573fe8f91-mockuuups-black-macbook-mockup-on-a-white-table-with-black-textbooks-at-the-side.jpeg",
    };
  },
};
</script>
