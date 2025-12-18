import type React from "react";

export interface StarsType {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

export interface MeteorsType {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

export interface NavItemType {
  name: string;
  href: string;
}

export interface AboutItemsType {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}
