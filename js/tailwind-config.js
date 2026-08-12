/* ==========================================================================
   Hanse Begleitservice — Tailwind CSS Configuration
   يحدد الألوان والمسافات والخطوط المخصصة المستخدمة في كل الموقع.
   ========================================================================== */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "navy": "#1a2b3c",
                "safety-yellow": "#FFD700",
                "on-background": "#1b1c1c",
                "tertiary-container": "#282a2a",
                "surface-container-high": "#eae8e7",
                "secondary-fixed": "#ffe16d",
                "tertiary-fixed": "#e2e2e2",
                "error": "#ba1a1a",
                "on-secondary": "#ffffff",
                "on-error": "#ffffff",
                "secondary-container": "#fcd400",
                "secondary-fixed-dim": "#e9c400",
                "surface-container-low": "#f6f3f2",
                "surface": "#fbf9f8",
                "primary": "#041627",
                "outline": "#74777d",
                "inverse-on-surface": "#f3f0f0",
                "on-primary": "#ffffff",
                "background": "#fbf9f8",
                "error-container": "#ffdad6",
                "on-tertiary": "#ffffff",
                "on-tertiary-fixed": "#1a1c1c",
                "primary-fixed-dim": "#b7c8de",
                "tertiary-fixed-dim": "#c6c6c6",
                "surface-tint": "#4f6073",
                "secondary": "#705d00",
                "on-tertiary-container": "#909191",
                "surface-bright": "#fbf9f8",
                "on-secondary-fixed": "#221b00",
                "surface-container": "#f0eded",
                "on-error-container": "#93000a",
                "inverse-surface": "#303030",
                "on-tertiary-fixed-variant": "#454747",
                "surface-container-lowest": "#ffffff",
                "tertiary": "#141616",
                "on-surface": "#1b1c1c",
                "outline-variant": "#c4c6cd",
                "on-surface-variant": "#44474c",
                "on-secondary-fixed-variant": "#544600",
                "on-primary-container": "#8192a7",
                "primary-container": "#1a2b3c",
                "on-primary-fixed": "#0b1d2d",
                "on-primary-fixed-variant": "#38485a",
                "surface-container-highest": "#e4e2e1",
                "inverse-primary": "#b7c8de",
                "primary-fixed": "#d2e4fb",
                "on-secondary-container": "#6e5c00",
                "surface-dim": "#dcd9d9",
                "surface-variant": "#e4e2e1"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            spacing: {
                "margin-mobile": "16px",
                "margin-desktop": "48px",
                "lg": "40px",
                "gutter": "24px",
                "sm": "12px",
                "md": "24px",
                "xs": "4px",
                "base": "8px",
                "xl": "64px"
            },
            fontFamily: {
                "headline-lg-mobile": ["Montserrat"],
                "headline-md": ["Montserrat"],
                "body-md": ["Work Sans"],
                "body-lg": ["Work Sans"],
                "label-caps": ["JetBrains Mono"],
                "headline-lg": ["Montserrat"],
                "display-lg": ["Montserrat"],
                "data-mono": ["JetBrains Mono"]
            },
            fontSize: {
                "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
                "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
                "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
                "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
                "data-mono": ["14px", { lineHeight: "20px", fontWeight: "500" }]
            }
        }
    }
};