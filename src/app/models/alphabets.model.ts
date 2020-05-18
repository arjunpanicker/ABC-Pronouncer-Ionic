export interface IAlphabetList {
    letters: Array<IAlphabet>;
}

export interface IAlphabet {
    id: number;
    text: string;
    assetLoc: string;
}
