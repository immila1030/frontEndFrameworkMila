<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRoute } from 'vue-router';
import { cn } from '@/lib/utils';
interface Item {
  title: string;
  href: string;
}

const $route = useRoute();

const sidebarNavItems: Item[] = [
  {
    title: '專案',
    href: '/forms/account',
  },
  {
    title: '手風琴',
    href: '/forms/appearance',
  },
  {
    title: '客製化顏色',
    href: '/forms/notifications',
  },
  {
    title: 'Pinia 和 Vueuse',
    href: '/forms/display',
  },
];
</script>
<template>
  <div class="flex flex-col lg:gap-4 lg:py-4 lg:pl-14">
    <header
      class="sticky top-0 z-30 flex h-14 items-center gap-4 bg-background px-4 lg:static lg:h-auto lg:border-0 lg:bg-transparent lg:px-6"
    >
      <Sheet>
        <SheetTrigger as-child>
          <Button size="icon"
                  variant="outline"
                  class="lg:hidden border-0">
            <img
              src="@/assets/icons/aside.svg"
              alt="Logo"
              class="icon col-start-1 col-end-3"
            />
            <span class="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left"
                      class="lg:max-w-xs">
          
          <nav class="grid gap-4 text-sm text-muted-foreground">
            <Button
              v-for="item in sidebarNavItems"
              :key="item.title"
              as="a"
              :href="item.href"
              variant="ghost"
              :class="
                cn(
                  'w-full text-left justify-start',
                  $route.path === item.href && 'bg-muted hover:bg-muted'
                )
              "
            >
              {{ item.title }}
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <!-- <Breadcrumb class="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="#">Dashboard</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <a href="#">Orders</a>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> -->
      <!-- <div class="relative ml-auto flex-1 md:grow-0">
          <Search
            class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div> -->
      <!-- <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary"
                    size="icon"
                    class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> -->
    </header>
  </div>

</template>
