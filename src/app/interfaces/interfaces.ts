export interface BowlerInterface {
    id: string,
    gender: string,
    lastName: string,
    firstName: string,
    usesThumb: boolean,
    sheets?: SpecSheetInterface[],
    rightHanded: boolean,
    arsenal: BowlingBallInterface[],
}

export interface BowlingBallInterface {
    brand: string,
    weight: number,
    serial: string,
    manufacturer: string,
    layout: string,
}

export interface Pitches {
    vertical: number,
    laternal: number,
}

export interface ThumbOval {
    oval: number,
}

export interface SpecSheetInterface {
    name: string,
    player: BowlerInterface,
    data: {
        span: {
            thumbToRing: number,
            thumbToMiddle: number,
        }
        middleFinger: Pitches,
        ringFinger: Pitches,
        thumb?: {
            pitch: Pitches,
            oval: ThumbOval,
        }
    },
}

export interface NavigationInterface {
    name: string,
    route: string,
}
