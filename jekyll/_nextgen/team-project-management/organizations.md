---
layout: classic-docs
title: Organizations
description: Explanation of the organization hierarchy in Load Impact
categories: [team-project-management]
order: 1
---

### What are organizations?

Every Load Impact user is, by default, the owner of an organization with the option of creating a second one. Organization owners and admins can invite new [team members]({{ site.baseurl }}/next-gen/team-project-management/adding-team-members/). Owners and Admins can manage [projects]({{ site.baseurl }}/next-gen/team-project-management/projects/) within an organization. Each project consists of tests, user scenarios, data stores, monitoring agents, and integrations. Each organization can also have its own subscription plan. Here is a diagram of the organizational hierarchy:

![Hierarchy]({{ site.baseurl }}/assets/img/nextgen/team-project-management/organizations/organization-hierarchy-diagram.png)

***

Once someone has been invited to an organization and assigned a permission level, they are either automatically(admins) or manually(read/write members) added to projects. Permissions are set at the organization level, and include the following:

**Owner:** Owns the organization and has all privileges. Automatically assigned to all projects. Each organization has one owner.

**Admin:** Can do everything an Owner can do, including adding/removing members and permissions, assigning members to projects, managing billing, creating projects, managing testing, managing API/server agent/New Relic tokens and keys, as well as creating new organizations. The only thing they can not do is remove an organization's Owner. Admins are automatically assigned to all projects in the organization.

**Read/Write:** Once assigned to a project, Read/Write members can create user scenarios, data stores and tests, and can run tests. They can also access Load Impact server agent tokens and New Relic API keys. They can not manage billing, create projects, assign themselves or other members to projects, add/remove members from the organization, or access Load Impact API tokens. Read/Write members must be added to specific projects by either organization Owners or Admins.

Each specific organizations can have its own premium subscription, the free subscription tier is only applied to the first organization.

If you have any questions about organizations or would like to have more than two organizations, please reach out to support.
