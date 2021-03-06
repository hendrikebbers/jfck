/*
 * Copyright 2015-2018 Canoo Engineering AG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package eu.javaland.ck;


import dev.rico.server.remoting.event.Topic;
import eu.javaland.ck.models.Vote;

public interface CommunityEventTopics {

    Topic<Boolean> UPDATE = Topic.create("update");
    Topic<Boolean> NEXT = Topic.create("next");
    Topic<Boolean> PREV = Topic.create("prev");
}
