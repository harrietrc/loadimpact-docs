---
layout: classic-docs
title: Projects
description: Projects are a foldering system within Load Impact. Projects allow you to organize your tests/scenarios and assign team members to have access to them.
permalink: /3.0/projects
categories: [organizations-projects]
order: 2
redirect_from: /knowledgebase/articles/780474-organizations
---

### What are projects?

Projects are a way to organize work and can be thought of as folders.  Every organization can have several projects.

All tests, user scenarios, data stores and organization members are grouped under projects. Here is a diagram of the organizational hierarchy:


Image: https://loadimpact.uservoice.com/assets/91235757/Organization+hierarchy+diagram.png
As an admin, to add a new project, navigate to the "Organizations and Projects" menu using the drop down next to your name:

Image: https://loadimpact.uservoice.com/assets/118801306/Image%202017-03-27%20at%2011.05.57%20AM.png


Next, Select "Add New Project":

Image: https://loadimpact.uservoice.com/assets/118801408/Image%202017-03-27%20at%2011.45.39%20AM.png

Then, give your project a name and add [team members](adding-team-members), as appropriate.  Note: you can only add team member who have been invited to your [organization](organizations).

Image: https://loadimpact.uservoice.com/assets/118801507/Image%202017-03-27%20at%2011.46.48%20AM.png


Once someone has been invited to an organization and assigned a permission level, they are either automatically(admins) or manually(read/write members) added to projects. Permissions are set at the organization level, and include the following:

**Owner:** Owns the organization and has all privileges. Automatically assigned to all projects.

**Admin:** Can do everything an Owner can do, including adding/removing members and permissions, assigning members to projects, managing billing, creating projects, managing testing, managing API/server agent/New Relic tokens and keys, and creating new organizations. The only thing they can not do is remove an organization owner. Finally, Admins are automatically assigned to all projects in the organization.

**Read/Write:** Once assigned to a project, Read/Write members can create user scenarios, data stores and tests, and can run tests. They can also access Load Impact server agent tokens and New Relic API keys. They can not manage billing, create projects, assign themselves or other members to projects, add/remove members from the organization, or access Load Impact API tokens. Finally, Read/Write members must be specifically added to projects by organization Owners or Admins.

If you have any questions about projects or would like help with setup, please reach out to us here at support.
