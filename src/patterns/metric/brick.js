import { Pattern, RegisterPattern } from "../../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,6.35
90, 0,0, 0,12.7, 6.35,-6.35
90, 6.35,0, 0,12.7, -6.35,6.35
`))
