<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about" isActive>About</NavItem>
      <NavItem to="/thoughts">Thoughts</NavItem>
      <NavItem to="/uses">Uses</NavItem>
    </Nav>
    <div class="max-w-3xl mx-auto px-4">
      <header class="container pt-10 pb-2 max-w-xl mx-auto">
        <h1 class="pt-16 pb-8 text-center">
          /About
        </h1>
      </header>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <div class="my-8">
            <a href="https://api.vercel.com/v1/integrations/deploy/prj_151ZIv2O8brPTtSO2oCMm7yx8Ekj/vyeyGIsHyW">
              <button class="bg-indigo-100 dark:bg-indigo-600 px-4 py-2 rounded-md text-indigo-900 dark:text-indigo-100 font-medium">
                Deploy site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
