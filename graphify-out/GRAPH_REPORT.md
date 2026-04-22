# Graph Report - D:\Masters Automation Engineering\MemorAIz\edu-velocity  (2026-04-22)

## Corpus Check
- 73 files · ~20,035 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 171 nodes · 140 edges · 52 communities detected
- Extraction: 79% EXTRACTED · 21% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]

## God Nodes (most connected - your core abstractions)
1. `Dashboard()` - 8 edges
2. `runMcpStudyPackageAgent()` - 8 edges
3. `useAI()` - 7 edges
4. `runPlaybookLearningAgent()` - 6 edges
5. `App()` - 5 edges
6. `daysUntil()` - 4 edges
7. `lessonToFlashcards()` - 4 edges
8. `lessonToQuiz()` - 4 edges
9. `runPrototype()` - 4 edges
10. `getApiKey()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Dashboard()` --calls--> `greeting()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\components\dashboard\Dashboard.jsx → D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\utils\dateHelpers.js
- `App()` --calls--> `useExams()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\ui\App.tsx → D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\hooks\useExams.js
- `App()` --calls--> `useStudyLog()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\ui\App.tsx → D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\hooks\useStudyLog.js
- `App()` --calls--> `useChatHistory()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\ui\App.tsx → D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\hooks\useChatHistory.js
- `ChatTab()` --calls--> `useAI()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\components\ai-companion\ChatTab.jsx → D:\Masters Automation Engineering\MemorAIz\edu-velocity\exam-sprint-planner\src\hooks\useAI.js

## Communities

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (12): runSample(), lessonToFlashcards(), normalizeText(), extractKeywords(), lessonToQuiz(), lessonToStudyPlan(), runMcpStudyPackageAgent(), getDriveMaterial() (+4 more)

### Community 1 - "Community 1"
Cohesion: 0.14
Nodes (8): ChatTab(), ExplainTab(), FlashcardTab(), MindmapTab(), QuizTab(), callAnthropic(), getApiKey(), useAI()

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (4): App(), useChatHistory(), useExams(), useStudyLog()

### Community 3 - "Community 3"
Cohesion: 0.19
Nodes (6): Dashboard(), metric(), studyStreak(), recommendTodaysTopics(), calculateOverallReadiness(), masteryCount()

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (6): daysUntil(), DaysRemaining(), SprintBlock(), blockStats(), generateSprintBlocks(), sortByDifficulty()

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (5): dateISO(), formatDate(), getWeekRange(), greeting(), TopicRow()

### Community 6 - "Community 6"
Cohesion: 0.47
Nodes (3): main(), runHelloWorldTests(), writeEvidenceArtifacts()

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (2): buildShortlist(), main()

### Community 8 - "Community 8"
Cohesion: 0.67
Nodes (0): 

### Community 9 - "Community 9"
Cohesion: 0.67
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 0.67
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 0.67
Nodes (0): 

### Community 12 - "Community 12"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Community 13"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Community 14"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Community 15"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Community 16"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Community 17"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Community 18"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Community 19"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Community 20"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Community 21"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Community 22"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Community 23"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Community 24"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Community 25"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Community 26"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (0): 

### Community 28 - "Community 28"
Cohesion: 1.0
Nodes (0): 

### Community 29 - "Community 29"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Community 30"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Community 31"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "Community 32"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "Community 33"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Community 34"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Community 35"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Community 36"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Community 42"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Community 43"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Community 44"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Community 45"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Community 46"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Community 47"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Community 48"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Community 49"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Community 50"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "Community 51"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Community 12`** (2 nodes): `AICompanion()`, `AICompanion.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `TopicSelector.jsx`, `TopicSelector()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `ReadinessOverview.jsx`, `ReadinessOverview()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `TodaysSprint.jsx`, `TodaysSprint()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `AddExamModal()`, `AddExamModal.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `ExamCard.jsx`, `ExamCard()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `ExamList.jsx`, `ExamList()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `Sidebar.jsx`, `Sidebar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (2 nodes): `TopBar.jsx`, `TopBar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (2 nodes): `SprintPlanner.jsx`, `SprintPlanner()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (2 nodes): `Settings.jsx`, `SettingsPage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (2 nodes): `ConfidencePill()`, `ConfidencePill.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (2 nodes): `LoadingSkeleton.jsx`, `LoadingSkeleton()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (2 nodes): `ReadinessBar.jsx`, `ReadinessBar()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (2 nodes): `StatsPage.jsx`, `StatsPage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (2 nodes): `VelocityScore.jsx`, `VelocityScore()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (2 nodes): `FocusTimer.jsx`, `FocusTimer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (2 nodes): `PomodoroRing.jsx`, `PomodoroRing()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (2 nodes): `verifyPagesBuild.ts`, `fail()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (2 nodes): `studyPackage.schema.ts`, `isStudyPackage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (2 nodes): `scoring.ts`, `calculateScore()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (2 nodes): `FlashcardRenderer.tsx`, `FlashcardRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 34`** (2 nodes): `HelloWorldPanel.tsx`, `HelloWorldPanel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 35`** (2 nodes): `QuizRenderer.tsx`, `QuizRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 36`** (2 nodes): `ShortlistTable.tsx`, `ShortlistTable()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (2 nodes): `StudyPlanRenderer.tsx`, `StudyPlanRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (2 nodes): `TrackingTable.tsx`, `TrackingTable()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (2 nodes): `VercelChatStyleRenderer.tsx`, `VercelChatStyleRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (1 nodes): `vitest.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 42`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `helloWorldTests.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (1 nodes): `skills.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (1 nodes): `learningPackage.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 49`** (1 nodes): `shortlist.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (1 nodes): `types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Dashboard()` connect `Community 3` to `Community 4`, `Community 5`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `daysUntil()` connect `Community 4` to `Community 3`, `Community 5`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Are the 5 inferred relationships involving `Dashboard()` (e.g. with `recommendTodaysTopics()` and `calculateOverallReadiness()`) actually correct?**
  _`Dashboard()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `runMcpStudyPackageAgent()` (e.g. with `getDriveMaterial()` and `getLmsMaterial()`) actually correct?**
  _`runMcpStudyPackageAgent()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `useAI()` (e.g. with `ChatTab()` and `ExplainTab()`) actually correct?**
  _`useAI()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `runPlaybookLearningAgent()` (e.g. with `lessonToFlashcards()` and `lessonToQuiz()`) actually correct?**
  _`runPlaybookLearningAgent()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `App()` (e.g. with `useExams()` and `useStudyLog()`) actually correct?**
  _`App()` has 3 INFERRED edges - model-reasoned connections that need verification._