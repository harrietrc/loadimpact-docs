---
layout: classic-docs
title: Organizations
description: Explanation of the organization hierarchy in Load Impact
categories: [organizations-projects]
order: 1
redirect_from:
  - /knowledgebase/articles/780474-organizations
  - /knowledgebase/topics/122955-team-and-project-management
---

### What are organizations?

Every Load Impact user is, by default, the owner of their own organization with the option of creating a second one. Organization owners and admins can invite new [team members](adding-team-members). An organization can manage its own set of [projects](projects) (each with tests, scenarios and data stores) as well as monitoring agents and integrations. Each organization can also have its own subscription plan. Here is a diagram of the organizational hierarchy:

Image: https://loadimpact.uservoice.com/assets/91235343/Organization+hierarchy+diagram.png

Apart from the owner, organizations can have [team members](adding-team-members) with one of the following permission levels:

**Admin:** Can do everything an Owner can do, including adding/removing members and permissions, assigning members to projects, managing billing, creating projects, managing testing, managing API/server agent/New Relic tokens and keys, as well as creating new organizations. The only thing they can not do is remove an organization's Owner. Admins are automatically assigned to all projects in the organization.

**Read/Write:** Once assigned to a project, Read/Write members can create user scenarios, data stores and tests, and can run tests. They can also access Load Impact server agent tokens and New Relic API keys. They can not manage billing, create projects, assign themselves or other members to projects, add/remove members from the organization, or access Load Impact API tokens. Read/Write members must be added to specific projects by either organization Owners or Admins.

Although each of a user's organizations can have its own premium subscription, the free subscription tier is only applied to the first organization.

If you have any questions about organizations or would like to have more than two organizations, please reach out to support.
