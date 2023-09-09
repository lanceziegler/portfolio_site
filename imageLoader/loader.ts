import { ImageLoaderProps } from "next/image";

export default function akamaiLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?imwidth=${width}`;
}
