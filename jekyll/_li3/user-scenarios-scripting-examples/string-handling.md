---
layout: classic-docs
title: String handling
description: Example code to take a string and return it as a Lua table
permalink: /3.0/string-handling
categories: [user-scenario-scripting-examples]
order: 18
redirect_from: /knowledgebase/articles/174607-testing-a-site-with-csrf-token-or-viewstate
---

***

#### Splitting string on specified delimiter
The following function will take as parameters a string and a delimiter and will split the string on the delimiter and return all parts as a Lua table.
```
--
-- String splitting function.
--
function string_split(str, delimiter)
    local ret = {}
    local pos = 1
    while true do
        local newpos = string.find(str, delimiter, pos)
        if newpos == nil then
            break
        end
        local item = string.sub(str, pos, newpos - 1)
        table.insert(ret, item)
        pos = pos + string.len(item) + string.len(delimiter)
    end
    if string.len(string.sub(str, pos)) > 0 then
        table.insert(ret, string.sub(str, pos))
    end
    return ret
end
```
