# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 10194 |
| Avg Cyclomatic | 1.5 |
| P90 Cyclomatic | 3 |
| Dead Files | 11.1% |
| Dead Exports | 24.9% |
| Maintainability (avg) | 90.8 |
| Circular Deps | 1 |
| Unused Deps | 0 |

## Fallow: 12 high complexity functions

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `src/components/glass/glass-sheet.tsx:21` | `GlassSheet` | critical | 10 | 10 | 110.0 **!** | 97 |
| `src/components/glass/glass-button.tsx:21` | `GlassButton` | high | 9 | 9 | 90.0 **!** | 104 |
| `src/components/glass/glass-sidebar.tsx:99` | `GlassSidebar` | high | 9 | 9 | 90.0 **!** | 68 |
| `src/components/glass/glass-dialog.tsx:27` | `GlassDialog` | high | 7 | 6 | 56.0 **!** | 33 |
| `src/components/ui/sheet.tsx:47` | `SheetContent` | moderate | 6 | 5 | 42.0 **!** | 40 |
| `src/components/glass/glass-card.tsx:15` | `GlassCard` | moderate | 5 | 3 | 30.0 **!** | 49 |
| `src/components/ui/toggle-group.tsx:51` | `ToggleGroupItem` | moderate | 5 | 4 | 30.0 **!** | 31 |
| `src/components/layout/content-blocks.tsx:498` | `CtaBanner` | moderate | 5 | 4 | 30.0 **!** | 37 |
| `src/components/glass/glass-form.tsx:13` | `GlassInput` | moderate | 5 | 4 | 30.0 **!** | 33 |
| `src/components/glass/glass-form.tsx:59` | `GlassTextarea` | moderate | 5 | 4 | 30.0 **!** | 33 |
| `src/components/glass/glass-form.tsx:103` | `GlassSelect` | moderate | 5 | 4 | 30.0 **!** | 41 |
| `src/components/glass/glass-sidebar.tsx:68` | `SidebarMain` | moderate | 5 | 4 | 30.0 **!** | 21 |

**63** files, **270** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT


Audit scope: 6 changed files vs main (8c8e8ff..HEAD)
✓ No issues in 6 changed files (0.38s)


## DEAD

## Fallow: 74 issues found

### Unused files (7)

- `reference-animated-border.css`
- `reference-apple-glass/GlassElement.module.css`
- `reference-apple-glass/GlassElement.tsx`
- `reference-apple-glass/getDisplacementFilter.ts`
- `reference-apple-glass/getDisplacementMap.ts`
- `src/components/ui/collapsible.tsx`
- `src/components/ui/sheet.tsx`

### Unused exports (47)

- `reference-apple-glass/GlassElement.module.css`
  - :1 `box`
- `reference-apple-glass/getDisplacementFilter.ts`
  - :17 `getDisplacementFilter`
- `reference-apple-glass/getDisplacementMap.ts`
  - :8 `getDisplacementMap`
- `src/components/glass/glass-dialog.tsx`
  - :61 `DialogClose` (re-export)
- `src/components/glass/glass-form.tsx`
  - :187 `GlassContactForm`
- `src/components/glass/glass-sheet.tsx`
  - :21 `GlassSheet`
  - :119 `SheetClose`
- `src/components/glass/index.ts`
  - :10 `GlassNav` (re-export)
  - :16 `DialogClose` (re-export)
  - :19 `GlassSheet` (re-export)
  - :19 `SheetClose` (re-export)
  - :22 `GlassSidebar` (re-export)
  - :22 `GlassSidebarProvider` (re-export)
  - :22 `SidebarMain` (re-export)
  - :25 `GlassCheckbox` (re-export)
  - :25 `GlassContactForm` (re-export)
  - :25 `GlassInput` (re-export)
  - :25 `GlassSelect` (re-export)
  - :25 `GlassTextarea` (re-export)
- `src/components/ui/badge.tsx`
  - :48 `badgeVariants`
- `src/components/ui/breadcrumb.tsx`
  - :108 `BreadcrumbEllipsis`
- `src/components/ui/card.tsx`
  - :89 `CardAction`
- `src/components/ui/command.tsx`
  - :175 `Command`
- `src/components/ui/dialog.tsx`
  - :154 `DialogOverlay`
  - :155 `DialogPortal`
- `src/components/ui/menubar.tsx`
  - :261 `MenubarPortal`
  - :265 `MenubarGroup`
  - :267 `MenubarLabel`
  - :270 `MenubarCheckboxItem`
  - :271 `MenubarRadioGroup`
  - :272 `MenubarRadioItem`
  - :273 `MenubarSub`
  - :274 `MenubarSubTrigger`
  - :275 `MenubarSubContent`
- `src/components/ui/navigation-menu.tsx`
  - :165 `NavigationMenuIndicator`
  - :166 `NavigationMenuViewport`
  - :167 `navigationMenuTriggerStyle`
- `src/components/ui/popover.tsx`
  - :85 `PopoverAnchor`
- `src/components/ui/scroll-area.tsx`
  - :58 `ScrollBar`
- `src/components/ui/select.tsx`
  - :182 `SelectGroup`
  - :184 `SelectLabel`
  - :185 `SelectScrollDownButton`
  - :186 `SelectScrollUpButton`
  - :187 `SelectSeparator`
- `src/components/ui/table.tsx`
  - :111 `TableFooter`
  - :115 `TableCaption`
- `src/components/ui/tabs.tsx`
  - :91 `tabsListVariants`

### Unused type exports (19)

- `src/components/glass/glass-button.tsx`
  - :8 `GlassButtonProps`
- `src/components/glass/glass-form.tsx`
  - :7 `GlassInputProps`
  - :50 `GlassTextareaProps`
  - :95 `GlassSelectProps`
  - :148 `GlassCheckboxProps`
- `src/components/glass/index.ts`
  - :2 `GlassPanelProps` (re-export)
  - :5 `AnimatedBorderProps` (re-export)
  - :8 `GlassCardProps` (re-export)
  - :11 `GlassNavProps` (re-export)
  - :11 `NavItem` (re-export)
  - :14 `GlassButtonProps` (re-export)
  - :17 `GlassDialogProps` (re-export)
  - :20 `GlassSheetProps` (re-export)
  - :23 `GlassSidebarProps` (re-export)
  - :23 `GlassSidebarProviderProps` (re-export)
  - :26 `GlassCheckboxProps` (re-export)
  - :26 `GlassInputProps` (re-export)
  - :26 `GlassSelectProps` (re-export)
  - :26 `GlassTextareaProps` (re-export)

### Circular dependencies (1)

- `reference-apple-glass/getDisplacementFilter.ts` → `reference-apple-glass/getDisplacementMap.ts` → `reference-apple-glass/getDisplacementFilter.ts`




## DUPLICATION

note: hid 5 clone groups below minOccurrences=3 (lower --min-occurrences to see them)
## Fallow: 1 clone group found (3.3% duplication)

### Duplicates

**Clone group 1** (18 lines, 3 instances)

- `src/app/components/page.tsx:2225-2242`
- `src/app/components/page.tsx:2249-2266`
- `src/app/components/page.tsx:2273-2290`

### Clone Families

**Family 1** (1 group, 18 lines across `src/app/components/page.tsx`)

- Extract shared function (18 lines) from page.tsx, page.tsx, page.tsx (~36 lines saved)

**Summary:** 300 duplicated lines (3.3%) across 6 files



## DOCSTRINGS

### Docstring Coverage

- Status: fail
- Coverage: 3.33%
- Documented symbols: 4/120
- Missing docstrings: 116

