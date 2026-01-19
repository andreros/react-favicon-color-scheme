import { useEffect } from "react";

export type useColorSchemeFaviconProps = {
    faviconSelector?: string;
    faviconDark: string;
    faviconLight: string;
    onDarkModeEnabled?: (event: MediaQueryListEvent) => void;
    onLightModeEnabled?: (event: MediaQueryListEvent) => void;
}

export const useColorSchemeFavicon = ({ faviconSelector, faviconDark, faviconLight, onDarkModeEnabled, onLightModeEnabled }: useColorSchemeFaviconProps) => {
    useEffect(() => {
        const match = (event: MediaQueryListEvent) => {
            const selector = faviconSelector ?? '[rel="icon"]';
            const iconElement = document.querySelectorAll(selector)[0] as HTMLLinkElement;

            if (!iconElement) return;

            if (event.matches) {
                iconElement.href = faviconDark;
                onDarkModeEnabled?.(event);
            } else {
                iconElement.href = faviconLight;
                onLightModeEnabled?.(event);
            }
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', match);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', match);
        };
    }, []);

    return {};
}
