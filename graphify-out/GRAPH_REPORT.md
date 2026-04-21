# Graph Report - D:\Masters Automation Engineering\MemorAIz\edu-velocity  (2026-04-21)

## Corpus Check
- 32 files · ~5,601 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 69 nodes · 55 edges · 28 communities detected
- Extraction: 78% EXTRACTED · 22% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.8)
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

## God Nodes (most connected - your core abstractions)
1. `runMcpStudyPackageAgent()` - 8 edges
2. `runPlaybookLearningAgent()` - 6 edges
3. `lessonToFlashcards()` - 4 edges
4. `lessonToQuiz()` - 4 edges
5. `runPrototype()` - 4 edges
6. `runSample()` - 3 edges
7. `main()` - 3 edges
8. `lessonToStudyPlan()` - 3 edges
9. `writeEvidenceArtifacts()` - 2 edges
10. `runHelloWorldTests()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `runMcpStudyPackageAgent()` --calls--> `getDriveMaterial()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\agents\mcpStudyPackageAgent.ts → D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\lib\mcp\mockDriveClient.ts
- `runMcpStudyPackageAgent()` --calls--> `getLmsMaterial()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\agents\mcpStudyPackageAgent.ts → D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\lib\mcp\mockLmsClient.ts
- `runMcpStudyPackageAgent()` --calls--> `lessonToFlashcards()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\agents\mcpStudyPackageAgent.ts → D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\lib\skills\lessonToFlashcards.ts
- `runMcpStudyPackageAgent()` --calls--> `lessonToQuiz()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\agents\mcpStudyPackageAgent.ts → D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\lib\skills\lessonToQuiz.ts
- `runSample()` --calls--> `runMcpStudyPackageAgent()`  [INFERRED]
  D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\lib\evaluation\helloWorldTests.ts → D:\Masters Automation Engineering\MemorAIz\edu-velocity\src\agents\mcpStudyPackageAgent.ts

## Communities

### Community 0 - "Community 0"
Cohesion: 0.25
Nodes (4): lessonToStudyPlan(), runMcpStudyPackageAgent(), getDriveMaterial(), getLmsMaterial()

### Community 1 - "Community 1"
Cohesion: 0.47
Nodes (3): main(), runHelloWorldTests(), writeEvidenceArtifacts()

### Community 2 - "Community 2"
Cohesion: 0.4
Nodes (4): runSample(), lessonToFlashcards(), normalizeText(), runPlaybookLearningAgent()

### Community 3 - "Community 3"
Cohesion: 0.67
Nodes (2): buildShortlist(), main()

### Community 4 - "Community 4"
Cohesion: 1.0
Nodes (2): extractKeywords(), lessonToQuiz()

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (0): 

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (0): 

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (0): 

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (2): appendRunHistory(), runPrototype()

### Community 9 - "Community 9"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Community 10"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Community 11"
Cohesion: 1.0
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

## Knowledge Gaps
- **Thin community `Community 9`** (2 nodes): `verifyPagesBuild.ts`, `fail()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `studyPackage.schema.ts`, `isStudyPackage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `scoring.ts`, `calculateScore()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (2 nodes): `App()`, `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (2 nodes): `FlashcardRenderer.tsx`, `FlashcardRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (2 nodes): `HelloWorldPanel.tsx`, `HelloWorldPanel()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (2 nodes): `QuizRenderer.tsx`, `QuizRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (2 nodes): `ShortlistTable.tsx`, `ShortlistTable()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (2 nodes): `StudyPlanRenderer.tsx`, `StudyPlanRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (2 nodes): `TrackingTable.tsx`, `TrackingTable()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (2 nodes): `VercelChatStyleRenderer.tsx`, `VercelChatStyleRenderer()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `vitest.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `helloWorldTests.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 23`** (1 nodes): `skills.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `learningPackage.schema.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (1 nodes): `shortlist.test.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `runMcpStudyPackageAgent()` connect `Community 0` to `Community 8`, `Community 2`, `Community 4`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `runSample()` connect `Community 2` to `Community 0`, `Community 1`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `runPlaybookLearningAgent()` connect `Community 2` to `Community 0`, `Community 8`, `Community 4`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `runMcpStudyPackageAgent()` (e.g. with `getDriveMaterial()` and `getLmsMaterial()`) actually correct?**
  _`runMcpStudyPackageAgent()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `runPlaybookLearningAgent()` (e.g. with `lessonToFlashcards()` and `lessonToQuiz()`) actually correct?**
  _`runPlaybookLearningAgent()` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `lessonToFlashcards()` (e.g. with `runMcpStudyPackageAgent()` and `runPlaybookLearningAgent()`) actually correct?**
  _`lessonToFlashcards()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `lessonToQuiz()` (e.g. with `runMcpStudyPackageAgent()` and `runPlaybookLearningAgent()`) actually correct?**
  _`lessonToQuiz()` has 2 INFERRED edges - model-reasoned connections that need verification._