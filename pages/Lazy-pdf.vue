<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem href="https://www.plugins.run" extLink>
        <span class="flex items-center">
          Plugins
          <external-link-icon
            size="1x"
            class="ml-2 text-neutral-700 dark:text-neutral-300"
          ></external-link-icon>
        </span>
      </NavItem>
      <NavItem to="/portfolio">Projects</NavItem>
    </Nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16">
          <BackLink link="home"> Back home </BackLink>
        </div>
        <Header>/lazy-pdf</Header>
        <Subheader>
          <template #text>
            Effortless and interfaceless PDF creation.
          </template>
        </Subheader>
        <div>
          <img
            :src="`${hero}`"
            class="mt-10 rounded-2xl"
            alt="image of Lazy PDF app in use"
          />
        </div>
        <div class="py-4">
          <div>
            <div class="space-y-4 mt-8 mb-8">
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
              class="flex flex-col md:flex-row justify-center md:justify-start"
            >
              <a :href="`${download.url}`" class="no-underline">
                <Button color="purple">
                  <template #icon>
                    <download-icon
                      size="1x"
                      class="inline-block mr-2 text-purple-100"
                    />
                  </template>
                  <template #label>
                    {{ download.text }}
                  </template>
                </Button>
              </a>
            </div>
            <Divider />
            <div class="space-y-4 mb-8">
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
                class="rounded-2xl dark:ring-2 dark:ring-neutral-800 pt-4"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"
              />
            </div>
            <Divider />
            <div class="space-y-4 mb-8">
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
                class="rounded-2xl dark:ring-2 dark:ring-neutral-800 pt-4"
                src="https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png"
              />
            </div>
            <Divider />
            <div class="space-y-4 mb-8">
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
                class="rounded-2xl dark:ring-2 dark:ring-neutral-800 pt-4"
                src="https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"
              />
            </div>
            <Divider />
            <div class="space-y-4 mb-8">
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
                class="rounded-2xl dark:ring-2 dark:ring-neutral-800 pt-4"
                src="https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png"
              />
            </div>
          </div>
        </div>
        <Divider />
        <H2Header id="GET_IN_TOUCH">How to reach me.</H2Header>
        <GetInTouch />
      </div>
    </div>
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
import { DownloadIcon, ExternalLinkIcon } from "vue-feather-icons";

export default {
  name: "Lazy-PDF",
  components: {
    DownloadIcon,
    ExternalLinkIcon,
  },
  computed: {
    meta() {
      const metaData = {
        title: "Lazy PDF | KEJK",
        description: "Effortless and interfaceless PDF creation.",
        url: "https://kejk.tech/lazy-pdf",
        mainImage:
          "https://imgix.cosmicjs.com/17dbe8e0-4b69-11ec-9940-53a088b36636-meta.png",
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
        url:
          "https://res.cloudinary.com/kejk/raw/upload/v1617095071/Lazy_PDF_v1.1.dmg",
        text: "Download",
      },
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-neutral-on-the-wooden-table_e6bu8w.jpg",
    };
  },
};
</script>
