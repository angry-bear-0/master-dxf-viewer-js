import { Pattern, RegisterPattern } from "../../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*JIS_STN_2.5,JIS_STN_2.5
45, 0,0, 0,2.5
45, 1.765,0, 0,2.5, 1.2,-.5
`))
