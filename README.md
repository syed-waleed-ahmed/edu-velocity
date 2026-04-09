# EDU Suite Capability Velocity Explorer (Phase 0 to Phase 3)

## Project Objective
This project validates EDU capability velocity: how quickly capabilities move from discovery to test to reusable integration and inspection in a minimal UI.

The workflow represented is:

capability -> reusable module -> structured JSON output -> focused renderer

## What Each Phase Produces

### Phase 0 (Setup)
- `src/tracking/trackingSheet.json`
- `src/tracking/useCases.json`
- `src/tracking/source_index.json`
- `src/tracking/scoring.ts`

### Phase 1 (Scan)
- `src/tracking/capabilities_raw.json`
- Mixed Skill, MCP, and Hybrid capabilities with scoring inputs and metadata

### Phase 2 (Shortlist + Classify)
- `src/tracking/shortlist.ts`
- `src/tracking/capabilities_shortlist.json` (Top 10 with rationale and `requires_ui`)

### Phase 3 (Rapid Test + Prototypes)
- `src/lib/evaluation/successCriteria.ts`
- `src/lib/evaluation/helloWorldTests.ts`
- `src/tracking/hello_world_results.json`
- `src/tracking/issues_log.json`
- Prototypes:
  - MCP reusable block: `src/agents/mcpStudyPackageAgent.ts`
  - Skill/Playbook reusable block: `src/agents/playbookLearningAgent.ts`

## How to Run

1. Install dependencies:

   npm install

2. Generate Phase 2 shortlist:

   npm run score

3. Generate hello-world results and issues log:

   npm run evaluate

4. Start the UI:

   npm run dev

## How to Run Tests

npm run test

## UI Coverage
The single-page UI in `src/ui/App.tsx` includes:
- Overview and architecture statement
- Use Cases table
- Tracking Sheet table
- Raw Capability Pool with type filter
- Top 10 shortlist view
- Hello-world test results
- Prototype playground for both mandatory modules
- Structured renderers for flashcards, quiz, and study plan

## How to Add a New Capability

1. Add entry to `src/tracking/capabilities_raw.json` with required fields.
2. Include `impact`, `frequency`, and `feasibility`.
3. If type is MCP, include `setup_complexity`, `auth_model`, and `limits`.
4. For Skill-style workflows, include `replicate_as_playbook` guidance.
5. Run `npm run score` and `npm run evaluate`.

## How to Extend the Shortlist

1. Update scoring fields in `src/tracking/capabilities_raw.json`.
2. Modify ranking/rationale rules in `src/tracking/shortlist.ts` if needed.
3. Re-run `npm run score`.

## How to Add a New Renderer or Module

1. Add reusable logic under `src/agents` or `src/lib/skills`.
2. Ensure output matches `src/schemas/studyPackage.schema.ts` and `src/schemas/learningPackage.schema.ts`.
3. Add a renderer in `src/ui/components`.
4. Wire it into `src/ui/components/PrototypeRunner.tsx` or `src/ui/App.tsx`.

## Constraints Followed
- No auth
- No database
- No backend server
- No heavy UI framework
- Local deterministic mock modules and structured JSON outputs
