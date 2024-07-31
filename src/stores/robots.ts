import { ref } from 'vue'
import { defineStore } from 'pinia'

export type RobotType = {
  id: number
  name: string
}


const robotsDefaultList: RobotType[] = [
  { id: 1, name: "C-3PO" },
  { id: 2, name: "R2-D2" },
  { id: 3, name: "RoboCop" },
  { id: 4, name: "Optimus Prime" },
  { id: 5, name: "Wall-E" },
  { id: 6, name: "Terminator" },

]

export const useRobotsStore = defineStore('robots', () => {
  const robots = ref<RobotType[]>(robotsDefaultList)
  const selectedRobots = ref<RobotType[]>([])
  return { robots, selectedRobots }
})
