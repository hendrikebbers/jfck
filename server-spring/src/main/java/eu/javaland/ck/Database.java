package eu.javaland.ck;

import org.mapdb.DB;
import org.mapdb.DBMaker;
import org.mapdb.HTreeMap;
import org.mapdb.Serializer;

public class Database {
    public static final HTreeMap<String, String> users;
    public static final HTreeMap<String, String> votes;

    public static boolean showNames;

    static {
        DB db = DBMaker.fileDB("./communityserver.mapdb").fileChannelEnable().closeOnJvmShutdown().make();
        users = db.hashMap("users", Serializer.STRING, Serializer.STRING).createOrOpen();
        votes = db.hashMap("votes", Serializer.STRING, Serializer.STRING).createOrOpen();
    }
}
