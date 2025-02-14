"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function StoreMenu() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full">
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger className="w-full h-8 py-1">
            Store
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-screen">
            <div className="grid grid-cols-4 gap-8 p-4 w-full max-w-7xl mx-auto">
              <div className="space-y-4">
                <h3 className="font-semibold">Shop</h3>
                <ul className="space-y-2">
                  <li>Shop the Latest</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>Find a Store</li>
                  <li>Order Status</li>
                  <li>Apple Trade In</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Special Stores</h3>
                <ul className="space-y-2">
                  <li>Education</li>
                  <li>Business</li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
