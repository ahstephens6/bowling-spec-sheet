export interface BowlerInterface {
    id: string,
    gender: string,
    lastName: string,
    firstName: string,
    usesThumb: boolean,
    rightHanded: boolean,
    sheets?: SpecSheetInterface[],
    arsenal?: BowlingBallInterface[],
}

export interface BowlingBallInterface {
    brand: string,
    weight: number,
    serial: string,
    layout: string,
    manufacturer: string,
}

export interface Pitches {
    vertical: number,
    lateral: number,
}

export interface SpecSheetInterface {
    id: string,
    name: string,
    bowlerId: string;
    date?: Date;
    data: {
        span?: {
            thumbToRing: number,
            thumbToMiddle: number,
        },
        fingers: {
            middleFinger: {
                pitches: Pitches,
                oval: Number,
            },
            ringFinger: {
                pitches: Pitches,
                oval: Number,
            },
        },
        thumb?: {
            pitch: Pitches,
            oval: Number,
        },
    },
}

export interface NavigationInterface {
    name: string,
    route: string,
}
