# EDU Suite Capability Velocity Explorer

## Project Objective
This project validates EDU capability velocity: how quickly capabilities move from discovery to test to reusable integration and inspection in a focused UI.

Core workflow:

capability -> reusable module -> structured JSON output -> focused renderer

## What Each Phase Produces

### Phase 0 (Setup)
- `src/tracking/trackingSheet.json`
- `src/tracking/useCases.json`
- `src/tracking/types.ts`
- `src/tracking/scoring.ts`
- Tracking rows include explicit `output_json`, `output_ui`, `risks`, and `dependencies`

### Phase 1 (Scan)
- `src/tracking/capabilities_raw.json`
- Mixed Skill, MCP, and Hybrid capabilities with required metadata and explicit `use_cases`
- Source mapping and rationale artifacts for capability grounding

### Phase 2 (Shortlist + Classify)
- `src/tracking/shortlist.ts`
- `src/tracking/capabilities_shortlist.json` (Top 10 with score, rationale, and `requires_ui`)

### Phase 3 (Rapid Test + Prototypes)
- `src/lib/evaluation/successCriteria.ts`
- `src/lib/evaluation/helloWorldTests.ts`
- `src/tracking/hello_world_results.json`
- `src/tracking/issues_log.json`
- `src/tracking/runHistory.json`
- Evidence artifacts under `src/tracking/evidence/`:
  - `trigger_success_log.json`
  - `tool_call_comparison.json`
  - `api_reliability_log.json`
  - `repeat_run_consistency.json`
  - `first_run_user_validation.json`
  - `reprompt_observation_notes.json`
  - `velocity_baseline.json`
  - `vercel_ai_chat_renderer_evidence.json`
- Prototypes:
  - MCP reusable block: `src/agents/mcpStudyPackageAgent.ts`
  - Skill/Playbook reusable block: `src/agents/playbookLearningAgent.ts`

## Scripts

- `npm run dev` -> start local UI
- `npm run build` -> production build
- `npm run test` -> unit tests
- `npm run score` -> regenerate Top 10 shortlist from raw capabilities
- `npm run evaluate` -> regenerate hello-world results, issues, and run history
- `npm run validate:registry` -> strict validation of capability registry completeness and quality
- `npm run verify:pages` -> verify `dist/index.html` references compiled Pages assets (not `/src/*`)
- `npm run graphify:help` -> show Graphify CLI help
- `npm run graphify:install:vscode` -> install Graphify instructions for VS Code Copilot Chat
- `npm run graphify:build` -> build/update local knowledge graph in `graphify-out/`

## Graphify Setup (Repo-Scoped)

This repository is configured to use Graphify through Python module execution to avoid Windows PATH issues.

Prerequisites:

- Python 3.10+
- Graphify package installed: `pip install graphifyy`

Install VS Code Copilot Chat integration (writes `.github/copilot-instructions.md`):

`npm run graphify:install:vscode`

Generate or refresh the graph:

`npm run graphify:build`

Expected outputs:

- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.json`
- `graphify-out/graph.html`

Notes:

- Package name is `graphifyy` on PyPI, but the CLI module is `graphify`.
- If `graphify` is not on PATH on Windows, continue using `python -m graphify ...` (already handled by the npm scripts).

## GitHub Pages Deployment

This repository deploys with GitHub Actions via `.github/workflows/deploy-pages.yml`.

Deployment hardening in workflow:

- Runs `npm run verify:pages` after build
- Publishes `dist/404.html` as SPA fallback (`dist/index.html` copy)
- Publishes `dist/.nojekyll` to avoid Jekyll processing

Required repository setting:

- In GitHub -> Settings -> Pages -> Build and deployment -> Source, select `GitHub Actions`.
- Ensure branch-based deployment is disabled; otherwise GitHub can run `pages-build-deployment` and overwrite the Actions artifact with source files.

Expected project URL:

- `https://syed-waleed-ahmed.github.io/edu-velocity/`

If you open `https://syed-waleed-ahmed.github.io/` directly, you may load a different site and see missing `/src/...` module errors.

Quick troubleshooting checklist:

1. Confirm Pages Source is `GitHub Actions`.
2. In Deployments, confirm latest active entry says `via Deploy Vite site to Pages` (not `via pages-build-deployment`).
3. Re-run workflow `Deploy Vite site to Pages`.
4. Open `https://syed-waleed-ahmed.github.io/edu-velocity/` (not the root URL).
5. Hard refresh (`Ctrl+F5`) to clear cached HTML.
6. In browser DevTools, confirm JS loads from `assets/...` and not `/src/...`.

## Recommended Run Order

1. `npm install`
2. `npm run validate:registry`
3. `npm run score`
4. `npm run evaluate`
5. `npm run test`
6. `npm run build`
7. `npm run verify:pages`
8. `npm run dev`

## UI Coverage
The single-page UI in `src/ui/App.tsx` includes:
- Overview and architecture statement
- Use Cases table
- Tracking Sheet table
- Skills and MCP Registry table (unified Deliverable 2 view)
- Top 10 shortlist view
- Hello-world test results
- Prototype playground for both mandatory modules
- Structured renderers for flashcards, quiz, and study plan
- Vercel AI Chat-style message-part renderer evidence in prototype output

The layout is optimized for desktop, tablet, and mobile with scroll-contained wide tables and responsive panel sizing.

## Capability Registry Contract (`src/tracking/capabilities_raw.json`)

Each capability must include:

- `capability_name`
- `category` (`Engagement | Conversion | Creation | Connection | Knowledge | Control`)
- `type` (`Skill | MCP | Hybrid`)
- `persona` (`student | teacher | admin`)
- `use_cases` (non-empty string array)
- `input`
- `output` (non-empty JSON object)
- `effort` (`S | M | L`)
- `risks` (non-empty array)
- `dependencies` (non-empty array)
- `source`
- `source_link` (valid URL)
- `impact`, `frequency`, `feasibility` (integer 1-5)

Additional requirements:

- For `Skill`: include `replicate_as_playbook` guidance when applicable.
- For `MCP` and `Hybrid`: `setup_complexity`, `auth_model`, and `limits` are required.

## How to Add a New Capability

1. Add a full entry in `src/tracking/capabilities_raw.json` following the registry contract above.
2. Ensure `use_cases` references existing entries from `src/tracking/useCases.json`.
3. Run `npm run validate:registry`.
4. Run `npm run score`.
5. Run `npm run evaluate`.

## How to Extend Shortlisting

1. Adjust raw capability scoring inputs (`impact`, `frequency`, `feasibility`).
2. Update ranking/rationale rules in `src/tracking/shortlist.ts` only if needed.
3. Re-run `npm run score`.

## How to Add a New Renderer or Module

1. Add reusable logic under `src/agents` or `src/lib/skills`.
2. Ensure outputs conform to `src/schemas/studyPackage.schema.ts` and `src/schemas/learningPackage.schema.ts`.
3. Add a renderer in `src/ui/components`.
4. Wire into `src/ui/components/PrototypeRunner.tsx` or `src/ui/App.tsx`.

## Constraints Followed
- No database
- No backend server
- No heavy UI framework
- Local deterministic mock modules and structured JSON outputs
