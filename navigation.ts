import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ['en', 'ar'];

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });
