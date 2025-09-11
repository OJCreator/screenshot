class ScreenshotType {

    public readonly imgWidth: number;
    public readonly imgHeight: number;

    public readonly screenshotWidth: number;
    public readonly screenshotHeight: number;

    public readonly phoneFilename: string;
    public readonly phoneLeft: string;
    public readonly phoneTop: string;
    public readonly phoneTransform: string;

    public readonly textLeft: string;
    public readonly textTop: string;
    public readonly textRight: string;
    public readonly textBottom: string;
    public readonly textTransform: string;
    public readonly textAlign: string;
    public readonly textWidth: string;

    constructor(imgWidth: number, imgHeight: number, screenshotWidth: number, screenshotHeight: number, phoneFilename: string, phoneLeft: string, phoneTop: string, phoneTransform: string, textLeft: string, textTop: string, textRight: string, textBottom: string, textTransform: string, textAlign: string, textWidth: string) {
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.screenshotWidth = screenshotWidth;
        this.screenshotHeight = screenshotHeight;
        this.phoneFilename = phoneFilename;
        this.phoneLeft = phoneLeft;
        this.phoneTop = phoneTop;
        this.phoneTransform = phoneTransform;
        this.textLeft = textLeft;
        this.textTop = textTop;
        this.textRight = textRight;
        this.textBottom = textBottom;
        this.textTransform = textTransform;
        this.textAlign = textAlign;
        this.textWidth = textWidth;
    }
}

class ScreenshotTypes {
    static readonly PT_BOTTOM = new ScreenshotType(
        1080,
        1920,
        720,
        1480,
        "/phone_vertical.png",
        "50%",
        "50%",
        "translate(-50%, -25%)",
        "50%",
        "",
        "",
        "80%",
        "translateX(-50%)",
        "center",
        "720px"
    );
    static readonly PT_TOP = new ScreenshotType(
        1080,
        1920,
        720,
        1480,
        "/phone_vertical.png",
        "50%",
        "50%",
        "translate(-50%, -75%)",
        "50%",
        "70%",
        "",
        "",
        "translateX(-50%)",
        "center",
        "720px"
    );
    static readonly PT_MIDDLE = new ScreenshotType(
        1080,
        1920,
        720,
        1480,
        "/phone_vertical.png",
        "50%",
        "50%",
        "translate(-50%, -56%)",
        "50%",
        "83%",
        "",
        "",
        "translateX(-50%)",
        "center",
        "720px"
    );
    static readonly PT_TILTED1 = new ScreenshotType(
        1080,
        1920,
        720,
        1480,
        "/phone_vertical.png",
        "100%",
        "50%",
        "translate(-50%, -50%) rotate(45deg)",
        "50%",
        "7%",
        "",
        "",
        "translateX(-50%)",
        "left",
        "720px"
    );
    static readonly PT_TILTED2 = new ScreenshotType(
        1080,
        1920,
        720,
        1480,
        "/phone_vertical.png",
        "0%",
        "50%",
        "translate(-50%, -50%) rotate(45deg)",
        "50%",
        "",
        "",
        "7%",
        "translateX(-50%)",
        "right",
        "720px"
    );


    static readonly LS_LEFT = new ScreenshotType(
        1920,
        1080,
        1480,
        720,
        "/phone_horizontal.png",
        "18%",
        "50%",
        "translate(-50%, -50%)",
        "79%",
        "9%",
        "",
        "",
        "translateX(-50%)",
        "left",
        "700px"
    );
    static readonly LS_TOP = new ScreenshotType(
        1920,
        1080,
        1480,
        720,
        "/phone_horizontal.png",
        "50%",
        "18%",
        "translate(-50%, -50%)",
        "50%",
        "50%",
        "",
        "",
        "translateX(-50%)",
        "center",
        "1480px"
    );
    static readonly LS_RIGHT = new ScreenshotType(
        1920,
        1080,
        1480,
        720,
        "/phone_horizontal.png",
        "82%",
        "50%",
        "translate(-50%, -50%)",
        "21%",
        "9%",
        "",
        "",
        "translateX(-50%)",
        "right",
        "700px"
    );
    static readonly LS_BOTTOM = new ScreenshotType(
        1920,
        1080,
        1480,
        720,
        "/phone_horizontal.png",
        "50%",
        "82%",
        "translate(-50%, -50%)",
        "50%",
        "",
        "",
        "60%",
        "translateX(-50%)",
        "center",
        "1480px"
    );

    // static LS_LEFT;
    // static LS_TOP;
    // static LS_RIGHT;
    // static LS_MIDDLE;
}

export default ScreenshotTypes;
