import type React from "react";

export interface CloudProps {
  top: string;
  size: number;
  duration: string;
  opacity: string;
}
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

export interface SkillType {
  name: string;
  level: number;
  category: string;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface ContactInfoType {
  id: number;
  icon: React.ReactNode;
  title: string;
  detail: string;
}

export interface SocialMediaType {
  id: number;
  icon: React.ReactNode;
  href: string;
}

export interface FormDataType {
  name: string;
  email: string;
  message: string;
}

export interface FormInputType {
  id: keyof FormDataType;
  field: string;
  placeholder: string;
}

export interface templateType {
  from_name: string;
  from_email: string;
  to_name: string;
  message: string;
}

export interface SendMessageParameter {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: templateType;
}
