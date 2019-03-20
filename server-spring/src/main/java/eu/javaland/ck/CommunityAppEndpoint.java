package eu.javaland.ck;

import com.google.gson.Gson;
import dev.rico.server.SingletonScope;
import dev.rico.server.remoting.event.RemotingEventBus;
import eu.javaland.ck.models.User;
import eu.javaland.ck.models.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.UUID;

import static eu.javaland.ck.Database.users;
import static eu.javaland.ck.Database.votes;

@SingletonScope
@RestController
public class CommunityAppEndpoint {

    private final Gson gson = new Gson();

    @Autowired
    private RemotingEventBus eventBus;

    public CommunityAppEndpoint() {
    }

    @PostMapping("/hide")
    public void hideInfo() {
        Database.showNames = false;
        eventBus.publish(CommunityEventTopics.UPDATE, null);
    }

    @PostMapping("/show")
    public void showInfo() {
        Database.showNames = true;
        eventBus.publish(CommunityEventTopics.UPDATE, null);
    }

    @PutMapping("/users")
    public User newUser(@RequestBody User user) {
        UUID uuid = UUID.randomUUID();
        user.setId(uuid.toString());

        String json = gson.toJson(user);
        users.put(uuid.toString(), json);

        return user;
    }

    @PutMapping("/votes")
    public void newVote(@RequestBody Vote vote) {
        UUID uuid = UUID.randomUUID();
        vote.setId(uuid.toString());
        votes.put(uuid.toString(), gson.toJson(vote));
        eventBus.publish(CommunityEventTopics.UPDATE, null);
    }

    @DeleteMapping("/votes")
    public void resetVotes() {
        votes.clear();
        eventBus.publish(CommunityEventTopics.UPDATE, null);
    }

    @PostMapping("/next")
    public void next() {
        eventBus.publish(CommunityEventTopics.NEXT, true);
    }

    @PostMapping("/prev")
    public void questions() {
        eventBus.publish(CommunityEventTopics.PREV, true);
    }
}
