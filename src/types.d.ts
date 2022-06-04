/*
** when use types or when use interface?
you can also use type for objects
interface is created to be extended
*/
/*
interface SpecialDiary extends DiaryEntry {
  flighNumber: number
}
oe for types
type SpecialDiary2 = DiaryEntry & {
  flightNumber: number
}
*/

export type Weather =
| 'sunny'
| 'rainy'
| 'cloudy'
| 'snowy'
| 'windy'
| 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad' | 'terrible'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// noSensitiveInfoDiaryEntry
// export type noSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type noSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
