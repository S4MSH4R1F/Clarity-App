// PLACEHOLDER VALUES -- replace every hex code with the exact value from Figma inspector panel
export const colors = {
    primaryBlue: "#1E3A8A",
    accentYellow: "#FACC15",
    white: "#FFFFFF",
    black: "#000000",
    darkBg: "#121417",
    textDark: "#111827",
    textLight: "#F9FAFB",
    cardBg: "#F3F4F6",
    border: "#E5E7EB",
    statusIntroduced: "#93C5FD",
    statusInCommittee: "#FDE68A",
    statusPassed: "#86EFAC",
    statusFailed: "FCA5A5",
};

export const spacing = {
    xs: 4,
    sm: 8, 
    md: 16,
    lg: 24,
    xl: 32,
};

export const radii = {
    sm: 6,
    md: 12,
    lg: 20,
    pill: 999,
};

export const typography = {
    fontFamily: "System", // Replace with Figma actual font (e.g. Inter, SF Pro)
    h1: { fontSize: 28, fontWeight: "700" as const },
    h2: { fontSize: 22, fontWeight: "700" as const },
    body: { fontSize: 16, fontWeight: "400" as const },
    caption: { fontSize: 13, fontWeight: "500" as const },
};

