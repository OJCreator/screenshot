class ScreenshotType {

    public readonly imgWidth: number;
    public readonly imgHeight: number;

    public readonly screenshotWidth: number;
    public readonly screenshotHeight: number;
    public readonly screenshot2Width: number | null;
    public readonly screenshot2Height: number | null;

    public readonly phoneFilename: string;
    public readonly phoneLeft: string;
    public readonly phoneTop: string;
    public readonly phoneTransform: string;
    public readonly phone2Filename: string | null;
    public readonly phone2Left: string | null;
    public readonly phone2Top: string | null;
    public readonly phone2Transform: string | null;

    public readonly textLeft: string;
    public readonly textTop: string;
    public readonly textRight: string;
    public readonly textBottom: string;
    public readonly textTransform: string;
    public readonly textAlign: string;
    public readonly textWidth: string;

    public readonly twoScreenshots: boolean;
    public readonly phonePlacement: string;
    public readonly orientation: string;

    constructor(options: {
        imgWidth: number,
        imgHeight: number,

        screenshotWidth: number,
        screenshotHeight: number,
        screenshot2Width?: number,
        screenshot2Height?: number,

        phoneFilename?: string,
        phoneLeft?: string,
        phoneTop?: string,
        phoneTransform?: string,

        phone2Filename?: string,
        phone2Left?: string,
        phone2Top?: string,
        phone2Transform?: string,

        textLeft?: string,
        textTop?: string,
        textRight?: string,
        textBottom?: string,
        textTransform?: string,
        textAlign: string,
        textWidth: string,

        twoScreenshots?: boolean,
        phonePlacement: "top" | "bottom" | "left" | "right" | "middle" | "tilted1" | "tilted2",
        orientation: "landscape" | "portrait",
    }) {

        this.imgWidth = options.imgWidth;
        this.imgHeight = options.imgHeight;

        this.screenshotWidth = options.screenshotWidth;
        this.screenshotHeight = options.screenshotHeight;

        this.screenshot2Width = options.screenshot2Width ?? (options.twoScreenshots ? 720 : null);
        this.screenshot2Height = options.screenshot2Height ?? (options.twoScreenshots ? 1480 : null);

        this.phoneFilename = options.phoneFilename ?? (options.orientation == "portrait" ? "phone_vertical.png" : "phone_horizontal.png");
        this.phoneLeft = options.phoneLeft ?? "50%";
        this.phoneTop = options.phoneTop ?? "50%";
        this.phoneTransform = options.phoneTransform ?? "translate(-50%, -50%)";

        this.phone2Filename = options.phone2Filename ?? (options.twoScreenshots ? (options.orientation == "portrait" ? "phone_vertical.png" : "phone_horizontal.png") : null);
        this.phone2Left = options.phone2Left ?? (options.twoScreenshots ? "50%" : null);
        this.phone2Top = options.phone2Top ?? (options.twoScreenshots ? "50%" : null);
        this.phone2Transform = options.phone2Transform ?? (options.twoScreenshots ? "translate(-50%, -50%)" : null);

        this.textLeft = options.textLeft ?? "";
        this.textTop = options.textTop ?? "";
        this.textRight = options.textRight ?? "";
        this.textBottom = options.textBottom ?? "";
        this.textTransform = options.textTransform ?? "translateX(-50%)";
        this.textAlign = options.textAlign;
        this.textWidth = options.textWidth;

        this.twoScreenshots = options.twoScreenshots ?? false;
        this.phonePlacement = options.phonePlacement;
        this.orientation = options.orientation;
    }
}

class ScreenshotTypes {
    static readonly PT_BOTTOM = new ScreenshotType({
        imgWidth: 1080,
        imgHeight: 1920,
        screenshotWidth: 720,
        screenshotHeight: 1480,
        phoneTop: "67%",
        textLeft: "50%",
        textBottom: "78%",
        textAlign: "center",
        textWidth: "720px",
        phonePlacement: "bottom",
        orientation: "portrait"
    });
    static readonly PT_TOP = new ScreenshotType({
        imgWidth: 1080,
        imgHeight: 1920,
        screenshotWidth: 720,
        screenshotHeight: 1480,
        phoneTop: "33%",
        textLeft: "50%",
        textTop: "70%",
        textAlign: "center",
        textWidth: "720px",
        phonePlacement: "top",
        orientation: "portrait"
    });
    static readonly PT_MIDDLE = new ScreenshotType({
        imgWidth: 1080,
        imgHeight: 1920,
        screenshotWidth: 720,
        screenshotHeight: 1480,
        phoneTop: "44%",
        textLeft: "50%",
        textTop: "83%",
        textAlign: "center",
        textWidth: "720px",
        phonePlacement: "middle",
        orientation: "portrait"
    });
    static readonly PT_TILTED1 = new ScreenshotType({
        imgWidth: 1080,
        imgHeight: 1920,
        screenshotWidth: 720,
        screenshotHeight: 1480,
        screenshot2Width: 720,
        screenshot2Height: 1480,
        phoneLeft: "70%",
        phoneTop: "75%",
        phoneTransform: "translate(-50%, -50%) rotate(45deg)",
        phone2Left: "150%",
        phone2Top: "30%",
        phone2Transform: "translate(-50%, -50%) rotate(-45deg)",
        textLeft: "50%",
        textTop: "7%",
        textAlign: "left",
        textWidth: "720px",
        twoScreenshots: true,
        phonePlacement: "tilted1",
        orientation: "portrait"
    });
    static readonly PT_TILTED2 = new ScreenshotType({
        imgWidth: 1080,
        imgHeight: 1920,
        screenshotWidth: 720,
        screenshotHeight: 1480,
        screenshot2Width: 720,
        screenshot2Height: 1480,
        phoneLeft: "-30%",
        phoneTop: "75%",
        phoneTransform: "translate(-50%, -50%) rotate(45deg)",
        phone2Left: "50%",
        phone2Top: "30%",
        phone2Transform: "translate(-50%, -50%) rotate(-45deg)",
        textLeft: "50%",
        textBottom: "10%",
        textAlign: "right",
        textWidth: "720px",
        twoScreenshots: true,
        phonePlacement: "tilted2",
        orientation: "portrait"
    });


    static readonly LS_LEFT = new ScreenshotType({
        imgWidth: 1920,
        imgHeight: 1080,
        screenshotWidth: 1480,
        screenshotHeight: 720,
        phoneLeft: "18%",
        textLeft: "79%",
        textTop: "9%",
        textAlign: "left",
        textWidth: "700px",
        phonePlacement: "left",
        orientation: "landscape"
    });
    static readonly LS_TOP = new ScreenshotType({
        imgWidth: 1920,
        imgHeight: 1080,
        screenshotWidth: 1480,
        screenshotHeight: 720,
        phoneTop: "18%",
        textLeft: "50%",
        textTop: "50%",
        textAlign: "center",
        textWidth: "1480px",
        phonePlacement: "top",
        orientation: "landscape"
    });
    static readonly LS_RIGHT = new ScreenshotType({
        imgWidth: 1920,
        imgHeight: 1080,
        screenshotWidth: 1480,
        screenshotHeight: 720,
        phoneLeft: "82%",
        textLeft: "21%",
        textTop: "9%",
        textAlign: "right",
        textWidth: "700px",
        phonePlacement: "right",
        orientation: "landscape"
    });
    static readonly LS_BOTTOM = new ScreenshotType({
        imgWidth: 1920,
        imgHeight: 1080,
        screenshotWidth: 1480,
        screenshotHeight: 720,
        phoneTop: "82%",
        textLeft: "50%",
        textBottom: "60%",
        textAlign: "center",
        textWidth: "1480px",
        phonePlacement: "bottom",
        orientation: "landscape"
    });

    static readonly values = [
        ScreenshotTypes.PT_BOTTOM,
        ScreenshotTypes.PT_TOP,
        ScreenshotTypes.PT_MIDDLE,
        ScreenshotTypes.PT_TILTED1,
        ScreenshotTypes.PT_TILTED2,
        ScreenshotTypes.LS_LEFT,
        ScreenshotTypes.LS_TOP,
        ScreenshotTypes.LS_RIGHT,
        ScreenshotTypes.LS_BOTTOM,
    ]
}

export { ScreenshotType, ScreenshotTypes };
