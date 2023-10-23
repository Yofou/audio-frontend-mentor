import { Logo } from "~/components/icons/Logo";
import { NavLink } from "./Nav";
import { Facebook, Instagram, Twitter } from "~/components/icons/Socials";

export const Footer = defineComponent(
  () => {
    return () => {
      return (
        <footer class="w-full bg-black-300 h-[22.8rem] mt-[12.5rem] flex justify-center font-overline tracking-[0.125rem] font-bold">
          <div class="max-w-[70rem] w-full relative pt-[4.69rem]">
            <div class="w-[6.3rem] h-[.25rem] bg-orange-600 absolute top-0 left-0" />

            <div class="w-full flex justify-between">
              <Logo />

              <div class="flex gap-8 uppercase text-white-pure">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/headphones">Headphones</NavLink>
                <NavLink href="/speaker">Speaker</NavLink>
                <NavLink href="/earphones">Earphones</NavLink>
              </div>
            </div>

            <div class="w-full flex justify-between mt-[2.25rem] items-end">
              <p class="font-body text-white-pure/50 font-medium max-w-[33.75rem] tracking-[normal]">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>

              <div class="flex items-center gap-4">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>

            <p class="font-body font-bold text-white-pure/50 tracking-[normal] mt-14">Copyright 2021. All Rights Reserved</p>
          </div>
        </footer>
      );
    };
  },
  {
    name: "Footer",
  }
);
