import { DiaryEntry, noSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntires = (): DiaryEntry[] => diaries

export const findById = (id: number): noSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  // the good thing about ts is the tell you the return can be undefined so force you or put a if or defined undefined as possible return
  // if (!entry) throw new Error('Diary entry not found')
  if (entry != null) {
    const { comment, ...resOfDiary } = entry
    return resOfDiary
  }

  return undefined
}

// typescript controll all the static but we can make this occur we have to filter it
export const getEntriesWithourSensitiveInfo = (): noSensitiveInfoDiaryEntry[] => {
  return diaries.map(diary => ({
    id: diary.id,
    date: diary.date,
    weather: diary.weather,
    visibility: diary.visibility
  }))
}

export const addEntry = (): undefined => undefined
