# Project Memory System

## Architecture Overview
- **Agents**: Specialized Claude instances for different tasks
- **Hooks**: Event-driven triggers for automation  
- **Memory**: Persistent knowledge graph with entity linking

## Key Entities
- Documentation files in `/docs`

## Conventions
- Use semantic versioning
- Maintain entity relationships in knowledge graph

## Agent Output Validation
**ALWAYS review agent outputs against their specific constraints:**
- html-formatter: NO sidebars/menus, component-only scope, JSON-sourced fields only
- Check agent .md files in `.claude/agents/` for specific rules before and after agent execution
- Validate deliverables match agent constraints before considering tasks complete