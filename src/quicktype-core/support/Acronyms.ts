import { EnumOption } from "../RendererOptions";
import { allUpperWordStyle, firstUpperWordStyle, originalWord, allLowerWordStyle } from "./Strings";

export const acronyms: string[] = [];

export enum AcronymStyleOptions {
    Pascal = "pascal",
    Camel = "camel",
    Original = "original",
    Lower = "lowerCase"
}

export const acronymOption = function(defaultOption: AcronymStyleOptions) {
    return new EnumOption(
        "acronym-style",
        "Acronym naming style",
        [
            [AcronymStyleOptions.Original, AcronymStyleOptions.Original],
            [AcronymStyleOptions.Pascal, AcronymStyleOptions.Pascal],
            [AcronymStyleOptions.Camel, AcronymStyleOptions.Camel],
            [AcronymStyleOptions.Lower, AcronymStyleOptions.Lower]
        ],
        defaultOption,
        "secondary"
    );
};

export function acronymStyle(style: AcronymStyleOptions): (s: string) => string {
    const options: { [key: string]: (s: string) => string } = {
        [AcronymStyleOptions.Pascal]: allUpperWordStyle,
        [AcronymStyleOptions.Camel]: firstUpperWordStyle,
        [AcronymStyleOptions.Original]: originalWord,
        [AcronymStyleOptions.Lower]: allLowerWordStyle
    };

    return options[style];
}
