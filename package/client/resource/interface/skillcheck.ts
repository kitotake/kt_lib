type SkillCheckDifficulty = 'easy' | 'medium' | 'hard' | { areaSize: number; speedMultiplier: number };

export const skillCheck = (difficulty: SkillCheckDifficulty | SkillCheckDifficulty[], inputs?: string[]) =>
  exports.kt_lib.skillCheck(difficulty);

export const skillCheckActive = (): boolean => exports.kt_lib.skillCheckActive();

export const cancelSkillCheck = (): void => exports.kt_lib.cancelSkillCheck();