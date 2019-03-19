package eu.javaland.ck;

import com.google.gson.Gson;
import dev.rico.server.SingletonScope;
import dev.rico.server.remoting.event.RemotingEventBus;
import eu.javaland.ck.models.User;
import eu.javaland.ck.models.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

import static eu.javaland.ck.Database.users;
import static eu.javaland.ck.Database.votes;

@SingletonScope
@RestController("/api")
public class CommunityAppEndpoint {

    private final Gson gson = new Gson();

    @Autowired
    private RemotingEventBus eventBus;

    public CommunityAppEndpoint() {
    }

    @PutMapping("/users")
    public User newUser(User user) {
        UUID uuid = UUID.randomUUID();
        user.setId(uuid.toString());

        String json = gson.toJson(user);
        users.put(uuid.toString(), json);

        return user;
    }

    @PutMapping("/votes")
    public void newVote(Vote vote) {
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
}
