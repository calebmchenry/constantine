public class RestConstants {
    // path params
    public static final String FIZZ_PARAM = "fizz";
    public static final String BAZ_PARAM="baz";

    // paths
    public static String FOO = "/foo";
    static final String FOO_BAR = "/foo/bar";
    static String FOO_101_BAR = "/foo/101/bar";
    // public static final String COMMENTED_CONSTANT = "/commented/constant";
    /**
    * export const COMMENTED_CONSTANT = "/commented/constant";
    */
    public static final String FOO_FIZZ = FOO + "/{" + FIZZ_PARAM + "}";
    public static final String POW = "/pow/"+BAZ_PARAM;
}
