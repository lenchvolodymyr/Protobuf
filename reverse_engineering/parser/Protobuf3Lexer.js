// Generated from grammars/Protobuf3.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002@\u026a\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003",
    "(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003",
    "+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u0003",
    "0\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u00034\u00035\u0003",
    "5\u00036\u00036\u00037\u00037\u00038\u00038\u00078\u01cd\n8\f8\u000e",
    "8\u01d0\u000b8\u00038\u00038\u00038\u00078\u01d5\n8\f8\u000e8\u01d8",
    "\u000b8\u00038\u00058\u01db\n8\u00039\u00039\u00039\u00039\u00059\u01e1",
    "\n9\u0003:\u0003:\u0003:\u0003:\u0003:\u0003;\u0003;\u0003;\u0003;\u0003",
    ";\u0003<\u0003<\u0003<\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003",
    "=\u0003=\u0003=\u0005=\u01f9\n=\u0003>\u0003>\u0003>\u0005>\u01fe\n",
    ">\u0003>\u0005>\u0201\n>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0005",
    ">\u0209\n>\u0005>\u020b\n>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003",
    ">\u0005>\u0213\n>\u0003?\u0003?\u0003?\u0005?\u0218\n?\u0003?\u0003",
    "?\u0003@\u0006@\u021d\n@\r@\u000e@\u021e\u0003A\u0003A\u0003A\u0005",
    "A\u0224\nA\u0003B\u0003B\u0007B\u0228\nB\fB\u000eB\u022b\u000bB\u0003",
    "C\u0003C\u0007C\u022f\nC\fC\u000eC\u0232\u000bC\u0003D\u0003D\u0003",
    "D\u0006D\u0237\nD\rD\u000eD\u0238\u0003E\u0003E\u0003E\u0007E\u023e",
    "\nE\fE\u000eE\u0241\u000bE\u0003F\u0003F\u0003G\u0003G\u0003H\u0003",
    "H\u0003I\u0003I\u0003J\u0006J\u024c\nJ\rJ\u000eJ\u024d\u0003J\u0003",
    "J\u0003K\u0003K\u0003K\u0003K\u0007K\u0256\nK\fK\u000eK\u0259\u000b",
    "K\u0003K\u0003K\u0003L\u0003L\u0003L\u0003L\u0007L\u0261\nL\fL\u000e",
    "L\u0264\u000bL\u0003L\u0003L\u0003L\u0003L\u0003L\u0005\u01ce\u01d6",
    "\u0262\u0002M\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$",
    "G%I&K\'M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q\u0002s\u0002u\u0002w\u0002",
    "y:{;}\u0002\u007f\u0002\u0081<\u0083\u0002\u0085\u0002\u0087\u0002\u0089",
    "=\u008b\u0002\u008d\u0002\u008f\u0002\u0091\u0002\u0093>\u0095?\u0097",
    "@\u0003\u0002\r\u0005\u0002\u0002\u0002\f\f^^\u0004\u0002ZZzz\u000b",
    "\u0002$$))^^cdhhppttvvxx\u0004\u0002GGgg\u0003\u00023;\u0005\u0002C",
    "\\aac|\u0003\u00022;\u0003\u000229\u0005\u00022;CHch\u0005\u0002\u000b",
    "\f\u000e\u000f\"\"\u0004\u0002\f\f\u000f\u000f\u0002\u0277\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002",
    "\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002",
    "K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003",
    "\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002",
    "\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002W\u0003\u0002\u0002",
    "\u0002\u0002Y\u0003\u0002\u0002\u0002\u0002[\u0003\u0002\u0002\u0002",
    "\u0002]\u0003\u0002\u0002\u0002\u0002_\u0003\u0002\u0002\u0002\u0002",
    "a\u0003\u0002\u0002\u0002\u0002c\u0003\u0002\u0002\u0002\u0002e\u0003",
    "\u0002\u0002\u0002\u0002g\u0003\u0002\u0002\u0002\u0002i\u0003\u0002",
    "\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003\u0002\u0002",
    "\u0002\u0002o\u0003\u0002\u0002\u0002\u0002y\u0003\u0002\u0002\u0002",
    "\u0002{\u0003\u0002\u0002\u0002\u0002\u0081\u0003\u0002\u0002\u0002",
    "\u0002\u0089\u0003\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002\u0002",
    "\u0002\u0095\u0003\u0002\u0002\u0002\u0002\u0097\u0003\u0002\u0002\u0002",
    "\u0003\u0099\u0003\u0002\u0002\u0002\u0005\u00a0\u0003\u0002\u0002\u0002",
    "\u0007\u00a7\u0003\u0002\u0002\u0002\t\u00ac\u0003\u0002\u0002\u0002",
    "\u000b\u00b3\u0003\u0002\u0002\u0002\r\u00bb\u0003\u0002\u0002\u0002",
    "\u000f\u00c2\u0003\u0002\u0002\u0002\u0011\u00cb\u0003\u0002\u0002\u0002",
    "\u0013\u00d4\u0003\u0002\u0002\u0002\u0015\u00dd\u0003\u0002\u0002\u0002",
    "\u0017\u00e3\u0003\u0002\u0002\u0002\u0019\u00e7\u0003\u0002\u0002\u0002",
    "\u001b\u00ed\u0003\u0002\u0002\u0002\u001d\u00f3\u0003\u0002\u0002\u0002",
    "\u001f\u00fa\u0003\u0002\u0002\u0002!\u0101\u0003\u0002\u0002\u0002",
    "#\u0108\u0003\u0002\u0002\u0002%\u010f\u0003\u0002\u0002\u0002\'\u0117",
    "\u0003\u0002\u0002\u0002)\u011f\u0003\u0002\u0002\u0002+\u0128\u0003",
    "\u0002\u0002\u0002-\u0131\u0003\u0002\u0002\u0002/\u0136\u0003\u0002",
    "\u0002\u00021\u013d\u0003\u0002\u0002\u00023\u0144\u0003\u0002\u0002",
    "\u00025\u014a\u0003\u0002\u0002\u00027\u0150\u0003\u0002\u0002\u0002",
    "9\u0159\u0003\u0002\u0002\u0002;\u015c\u0003\u0002\u0002\u0002=\u0160",
    "\u0003\u0002\u0002\u0002?\u0165\u0003\u0002\u0002\u0002A\u016d\u0003",
    "\u0002\u0002\u0002C\u0175\u0003\u0002\u0002\u0002E\u0179\u0003\u0002",
    "\u0002\u0002G\u0180\u0003\u0002\u0002\u0002I\u0188\u0003\u0002\u0002",
    "\u0002K\u0191\u0003\u0002\u0002\u0002M\u019a\u0003\u0002\u0002\u0002",
    "O\u01a3\u0003\u0002\u0002\u0002Q\u01ac\u0003\u0002\u0002\u0002S\u01ae",
    "\u0003\u0002\u0002\u0002U\u01b0\u0003\u0002\u0002\u0002W\u01b2\u0003",
    "\u0002\u0002\u0002Y\u01b4\u0003\u0002\u0002\u0002[\u01b6\u0003\u0002",
    "\u0002\u0002]\u01b8\u0003\u0002\u0002\u0002_\u01ba\u0003\u0002\u0002",
    "\u0002a\u01bc\u0003\u0002\u0002\u0002c\u01be\u0003\u0002\u0002\u0002",
    "e\u01c0\u0003\u0002\u0002\u0002g\u01c2\u0003\u0002\u0002\u0002i\u01c4",
    "\u0003\u0002\u0002\u0002k\u01c6\u0003\u0002\u0002\u0002m\u01c8\u0003",
    "\u0002\u0002\u0002o\u01da\u0003\u0002\u0002\u0002q\u01e0\u0003\u0002",
    "\u0002\u0002s\u01e2\u0003\u0002\u0002\u0002u\u01e7\u0003\u0002\u0002",
    "\u0002w\u01ec\u0003\u0002\u0002\u0002y\u01f8\u0003\u0002\u0002\u0002",
    "{\u0212\u0003\u0002\u0002\u0002}\u0214\u0003\u0002\u0002\u0002\u007f",
    "\u021c\u0003\u0002\u0002\u0002\u0081\u0223\u0003\u0002\u0002\u0002\u0083",
    "\u0225\u0003\u0002\u0002\u0002\u0085\u022c\u0003\u0002\u0002\u0002\u0087",
    "\u0233\u0003\u0002\u0002\u0002\u0089\u023a\u0003\u0002\u0002\u0002\u008b",
    "\u0242\u0003\u0002\u0002\u0002\u008d\u0244\u0003\u0002\u0002\u0002\u008f",
    "\u0246\u0003\u0002\u0002\u0002\u0091\u0248\u0003\u0002\u0002\u0002\u0093",
    "\u024b\u0003\u0002\u0002\u0002\u0095\u0251\u0003\u0002\u0002\u0002\u0097",
    "\u025c\u0003\u0002\u0002\u0002\u0099\u009a\u0007u\u0002\u0002\u009a",
    "\u009b\u0007{\u0002\u0002\u009b\u009c\u0007p\u0002\u0002\u009c\u009d",
    "\u0007v\u0002\u0002\u009d\u009e\u0007c\u0002\u0002\u009e\u009f\u0007",
    "z\u0002\u0002\u009f\u0004\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007",
    "k\u0002\u0002\u00a1\u00a2\u0007o\u0002\u0002\u00a2\u00a3\u0007r\u0002",
    "\u0002\u00a3\u00a4\u0007q\u0002\u0002\u00a4\u00a5\u0007t\u0002\u0002",
    "\u00a5\u00a6\u0007v\u0002\u0002\u00a6\u0006\u0003\u0002\u0002\u0002",
    "\u00a7\u00a8\u0007y\u0002\u0002\u00a8\u00a9\u0007g\u0002\u0002\u00a9",
    "\u00aa\u0007c\u0002\u0002\u00aa\u00ab\u0007m\u0002\u0002\u00ab\b\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0007r\u0002\u0002\u00ad\u00ae\u0007",
    "w\u0002\u0002\u00ae\u00af\u0007d\u0002\u0002\u00af\u00b0\u0007n\u0002",
    "\u0002\u00b0\u00b1\u0007k\u0002\u0002\u00b1\u00b2\u0007e\u0002\u0002",
    "\u00b2\n\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007r\u0002\u0002\u00b4",
    "\u00b5\u0007c\u0002\u0002\u00b5\u00b6\u0007e\u0002\u0002\u00b6\u00b7",
    "\u0007m\u0002\u0002\u00b7\u00b8\u0007c\u0002\u0002\u00b8\u00b9\u0007",
    "i\u0002\u0002\u00b9\u00ba\u0007g\u0002\u0002\u00ba\f\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0007q\u0002\u0002\u00bc\u00bd\u0007r\u0002\u0002",
    "\u00bd\u00be\u0007v\u0002\u0002\u00be\u00bf\u0007k\u0002\u0002\u00bf",
    "\u00c0\u0007q\u0002\u0002\u00c0\u00c1\u0007p\u0002\u0002\u00c1\u000e",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007q\u0002\u0002\u00c3\u00c4",
    "\u0007r\u0002\u0002\u00c4\u00c5\u0007v\u0002\u0002\u00c5\u00c6\u0007",
    "k\u0002\u0002\u00c6\u00c7\u0007q\u0002\u0002\u00c7\u00c8\u0007p\u0002",
    "\u0002\u00c8\u00c9\u0007c\u0002\u0002\u00c9\u00ca\u0007n\u0002\u0002",
    "\u00ca\u0010\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007t\u0002\u0002",
    "\u00cc\u00cd\u0007g\u0002\u0002\u00cd\u00ce\u0007s\u0002\u0002\u00ce",
    "\u00cf\u0007w\u0002\u0002\u00cf\u00d0\u0007k\u0002\u0002\u00d0\u00d1",
    "\u0007t\u0002\u0002\u00d1\u00d2\u0007g\u0002\u0002\u00d2\u00d3\u0007",
    "f\u0002\u0002\u00d3\u0012\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007",
    "t\u0002\u0002\u00d5\u00d6\u0007g\u0002\u0002\u00d6\u00d7\u0007r\u0002",
    "\u0002\u00d7\u00d8\u0007g\u0002\u0002\u00d8\u00d9\u0007c\u0002\u0002",
    "\u00d9\u00da\u0007v\u0002\u0002\u00da\u00db\u0007g\u0002\u0002\u00db",
    "\u00dc\u0007f\u0002\u0002\u00dc\u0014\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0007q\u0002\u0002\u00de\u00df\u0007p\u0002\u0002\u00df\u00e0",
    "\u0007g\u0002\u0002\u00e0\u00e1\u0007q\u0002\u0002\u00e1\u00e2\u0007",
    "h\u0002\u0002\u00e2\u0016\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007",
    "o\u0002\u0002\u00e4\u00e5\u0007c\u0002\u0002\u00e5\u00e6\u0007r\u0002",
    "\u0002\u00e6\u0018\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007k\u0002",
    "\u0002\u00e8\u00e9\u0007p\u0002\u0002\u00e9\u00ea\u0007v\u0002\u0002",
    "\u00ea\u00eb\u00075\u0002\u0002\u00eb\u00ec\u00074\u0002\u0002\u00ec",
    "\u001a\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007k\u0002\u0002\u00ee",
    "\u00ef\u0007p\u0002\u0002\u00ef\u00f0\u0007v\u0002\u0002\u00f0\u00f1",
    "\u00078\u0002\u0002\u00f1\u00f2\u00076\u0002\u0002\u00f2\u001c\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0007w\u0002\u0002\u00f4\u00f5\u0007",
    "k\u0002\u0002\u00f5\u00f6\u0007p\u0002\u0002\u00f6\u00f7\u0007v\u0002",
    "\u0002\u00f7\u00f8\u00075\u0002\u0002\u00f8\u00f9\u00074\u0002\u0002",
    "\u00f9\u001e\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007w\u0002\u0002",
    "\u00fb\u00fc\u0007k\u0002\u0002\u00fc\u00fd\u0007p\u0002\u0002\u00fd",
    "\u00fe\u0007v\u0002\u0002\u00fe\u00ff\u00078\u0002\u0002\u00ff\u0100",
    "\u00076\u0002\u0002\u0100 \u0003\u0002\u0002\u0002\u0101\u0102\u0007",
    "u\u0002\u0002\u0102\u0103\u0007k\u0002\u0002\u0103\u0104\u0007p\u0002",
    "\u0002\u0104\u0105\u0007v\u0002\u0002\u0105\u0106\u00075\u0002\u0002",
    "\u0106\u0107\u00074\u0002\u0002\u0107\"\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0007u\u0002\u0002\u0109\u010a\u0007k\u0002\u0002\u010a\u010b",
    "\u0007p\u0002\u0002\u010b\u010c\u0007v\u0002\u0002\u010c\u010d\u0007",
    "8\u0002\u0002\u010d\u010e\u00076\u0002\u0002\u010e$\u0003\u0002\u0002",
    "\u0002\u010f\u0110\u0007h\u0002\u0002\u0110\u0111\u0007k\u0002\u0002",
    "\u0111\u0112\u0007z\u0002\u0002\u0112\u0113\u0007g\u0002\u0002\u0113",
    "\u0114\u0007f\u0002\u0002\u0114\u0115\u00075\u0002\u0002\u0115\u0116",
    "\u00074\u0002\u0002\u0116&\u0003\u0002\u0002\u0002\u0117\u0118\u0007",
    "h\u0002\u0002\u0118\u0119\u0007k\u0002\u0002\u0119\u011a\u0007z\u0002",
    "\u0002\u011a\u011b\u0007g\u0002\u0002\u011b\u011c\u0007f\u0002\u0002",
    "\u011c\u011d\u00078\u0002\u0002\u011d\u011e\u00076\u0002\u0002\u011e",
    "(\u0003\u0002\u0002\u0002\u011f\u0120\u0007u\u0002\u0002\u0120\u0121",
    "\u0007h\u0002\u0002\u0121\u0122\u0007k\u0002\u0002\u0122\u0123\u0007",
    "z\u0002\u0002\u0123\u0124\u0007g\u0002\u0002\u0124\u0125\u0007f\u0002",
    "\u0002\u0125\u0126\u00075\u0002\u0002\u0126\u0127\u00074\u0002\u0002",
    "\u0127*\u0003\u0002\u0002\u0002\u0128\u0129\u0007u\u0002\u0002\u0129",
    "\u012a\u0007h\u0002\u0002\u012a\u012b\u0007k\u0002\u0002\u012b\u012c",
    "\u0007z\u0002\u0002\u012c\u012d\u0007g\u0002\u0002\u012d\u012e\u0007",
    "f\u0002\u0002\u012e\u012f\u00078\u0002\u0002\u012f\u0130\u00076\u0002",
    "\u0002\u0130,\u0003\u0002\u0002\u0002\u0131\u0132\u0007d\u0002\u0002",
    "\u0132\u0133\u0007q\u0002\u0002\u0133\u0134\u0007q\u0002\u0002\u0134",
    "\u0135\u0007n\u0002\u0002\u0135.\u0003\u0002\u0002\u0002\u0136\u0137",
    "\u0007u\u0002\u0002\u0137\u0138\u0007v\u0002\u0002\u0138\u0139\u0007",
    "t\u0002\u0002\u0139\u013a\u0007k\u0002\u0002\u013a\u013b\u0007p\u0002",
    "\u0002\u013b\u013c\u0007i\u0002\u0002\u013c0\u0003\u0002\u0002\u0002",
    "\u013d\u013e\u0007f\u0002\u0002\u013e\u013f\u0007q\u0002\u0002\u013f",
    "\u0140\u0007w\u0002\u0002\u0140\u0141\u0007d\u0002\u0002\u0141\u0142",
    "\u0007n\u0002\u0002\u0142\u0143\u0007g\u0002\u0002\u01432\u0003\u0002",
    "\u0002\u0002\u0144\u0145\u0007h\u0002\u0002\u0145\u0146\u0007n\u0002",
    "\u0002\u0146\u0147\u0007q\u0002\u0002\u0147\u0148\u0007c\u0002\u0002",
    "\u0148\u0149\u0007v\u0002\u0002\u01494\u0003\u0002\u0002\u0002\u014a",
    "\u014b\u0007d\u0002\u0002\u014b\u014c\u0007{\u0002\u0002\u014c\u014d",
    "\u0007v\u0002\u0002\u014d\u014e\u0007g\u0002\u0002\u014e\u014f\u0007",
    "u\u0002\u0002\u014f6\u0003\u0002\u0002\u0002\u0150\u0151\u0007t\u0002",
    "\u0002\u0151\u0152\u0007g\u0002\u0002\u0152\u0153\u0007u\u0002\u0002",
    "\u0153\u0154\u0007g\u0002\u0002\u0154\u0155\u0007t\u0002\u0002\u0155",
    "\u0156\u0007x\u0002\u0002\u0156\u0157\u0007g\u0002\u0002\u0157\u0158",
    "\u0007f\u0002\u0002\u01588\u0003\u0002\u0002\u0002\u0159\u015a\u0007",
    "v\u0002\u0002\u015a\u015b\u0007q\u0002\u0002\u015b:\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0007o\u0002\u0002\u015d\u015e\u0007c\u0002\u0002",
    "\u015e\u015f\u0007z\u0002\u0002\u015f<\u0003\u0002\u0002\u0002\u0160",
    "\u0161\u0007g\u0002\u0002\u0161\u0162\u0007p\u0002\u0002\u0162\u0163",
    "\u0007w\u0002\u0002\u0163\u0164\u0007o\u0002\u0002\u0164>\u0003\u0002",
    "\u0002\u0002\u0165\u0166\u0007o\u0002\u0002\u0166\u0167\u0007g\u0002",
    "\u0002\u0167\u0168\u0007u\u0002\u0002\u0168\u0169\u0007u\u0002\u0002",
    "\u0169\u016a\u0007c\u0002\u0002\u016a\u016b\u0007i\u0002\u0002\u016b",
    "\u016c\u0007g\u0002\u0002\u016c@\u0003\u0002\u0002\u0002\u016d\u016e",
    "\u0007u\u0002\u0002\u016e\u016f\u0007g\u0002\u0002\u016f\u0170\u0007",
    "t\u0002\u0002\u0170\u0171\u0007x\u0002\u0002\u0171\u0172\u0007k\u0002",
    "\u0002\u0172\u0173\u0007e\u0002\u0002\u0173\u0174\u0007g\u0002\u0002",
    "\u0174B\u0003\u0002\u0002\u0002\u0175\u0176\u0007t\u0002\u0002\u0176",
    "\u0177\u0007r\u0002\u0002\u0177\u0178\u0007e\u0002\u0002\u0178D\u0003",
    "\u0002\u0002\u0002\u0179\u017a\u0007u\u0002\u0002\u017a\u017b\u0007",
    "v\u0002\u0002\u017b\u017c\u0007t\u0002\u0002\u017c\u017d\u0007g\u0002",
    "\u0002\u017d\u017e\u0007c\u0002\u0002\u017e\u017f\u0007o\u0002\u0002",
    "\u017fF\u0003\u0002\u0002\u0002\u0180\u0181\u0007t\u0002\u0002\u0181",
    "\u0182\u0007g\u0002\u0002\u0182\u0183\u0007v\u0002\u0002\u0183\u0184",
    "\u0007w\u0002\u0002\u0184\u0185\u0007t\u0002\u0002\u0185\u0186\u0007",
    "p\u0002\u0002\u0186\u0187\u0007u\u0002\u0002\u0187H\u0003\u0002\u0002",
    "\u0002\u0188\u0189\u0007$\u0002\u0002\u0189\u018a\u0007r\u0002\u0002",
    "\u018a\u018b\u0007t\u0002\u0002\u018b\u018c\u0007q\u0002\u0002\u018c",
    "\u018d\u0007v\u0002\u0002\u018d\u018e\u0007q\u0002\u0002\u018e\u018f",
    "\u00075\u0002\u0002\u018f\u0190\u0007$\u0002\u0002\u0190J\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0007)\u0002\u0002\u0192\u0193\u0007r\u0002",
    "\u0002\u0193\u0194\u0007t\u0002\u0002\u0194\u0195\u0007q\u0002\u0002",
    "\u0195\u0196\u0007v\u0002\u0002\u0196\u0197\u0007q\u0002\u0002\u0197",
    "\u0198\u00075\u0002\u0002\u0198\u0199\u0007)\u0002\u0002\u0199L\u0003",
    "\u0002\u0002\u0002\u019a\u019b\u0007$\u0002\u0002\u019b\u019c\u0007",
    "r\u0002\u0002\u019c\u019d\u0007t\u0002\u0002\u019d\u019e\u0007q\u0002",
    "\u0002\u019e\u019f\u0007v\u0002\u0002\u019f\u01a0\u0007q\u0002\u0002",
    "\u01a0\u01a1\u00074\u0002\u0002\u01a1\u01a2\u0007$\u0002\u0002\u01a2",
    "N\u0003\u0002\u0002\u0002\u01a3\u01a4\u0007)\u0002\u0002\u01a4\u01a5",
    "\u0007r\u0002\u0002\u01a5\u01a6\u0007t\u0002\u0002\u01a6\u01a7\u0007",
    "q\u0002\u0002\u01a7\u01a8\u0007v\u0002\u0002\u01a8\u01a9\u0007q\u0002",
    "\u0002\u01a9\u01aa\u00074\u0002\u0002\u01aa\u01ab\u0007)\u0002\u0002",
    "\u01abP\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007=\u0002\u0002\u01ad",
    "R\u0003\u0002\u0002\u0002\u01ae\u01af\u0007?\u0002\u0002\u01afT\u0003",
    "\u0002\u0002\u0002\u01b0\u01b1\u0007*\u0002\u0002\u01b1V\u0003\u0002",
    "\u0002\u0002\u01b2\u01b3\u0007+\u0002\u0002\u01b3X\u0003\u0002\u0002",
    "\u0002\u01b4\u01b5\u0007]\u0002\u0002\u01b5Z\u0003\u0002\u0002\u0002",
    "\u01b6\u01b7\u0007_\u0002\u0002\u01b7\\\u0003\u0002\u0002\u0002\u01b8",
    "\u01b9\u0007}\u0002\u0002\u01b9^\u0003\u0002\u0002\u0002\u01ba\u01bb",
    "\u0007\u007f\u0002\u0002\u01bb`\u0003\u0002\u0002\u0002\u01bc\u01bd",
    "\u0007>\u0002\u0002\u01bdb\u0003\u0002\u0002\u0002\u01be\u01bf\u0007",
    "@\u0002\u0002\u01bfd\u0003\u0002\u0002\u0002\u01c0\u01c1\u00070\u0002",
    "\u0002\u01c1f\u0003\u0002\u0002\u0002\u01c2\u01c3\u0007.\u0002\u0002",
    "\u01c3h\u0003\u0002\u0002\u0002\u01c4\u01c5\u0007<\u0002\u0002\u01c5",
    "j\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007-\u0002\u0002\u01c7l\u0003",
    "\u0002\u0002\u0002\u01c8\u01c9\u0007/\u0002\u0002\u01c9n\u0003\u0002",
    "\u0002\u0002\u01ca\u01ce\u0007)\u0002\u0002\u01cb\u01cd\u0005q9\u0002",
    "\u01cc\u01cb\u0003\u0002\u0002\u0002\u01cd\u01d0\u0003\u0002\u0002\u0002",
    "\u01ce\u01cf\u0003\u0002\u0002\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002",
    "\u01cf\u01d1\u0003\u0002\u0002\u0002\u01d0\u01ce\u0003\u0002\u0002\u0002",
    "\u01d1\u01db\u0007)\u0002\u0002\u01d2\u01d6\u0007$\u0002\u0002\u01d3",
    "\u01d5\u0005q9\u0002\u01d4\u01d3\u0003\u0002\u0002\u0002\u01d5\u01d8",
    "\u0003\u0002\u0002\u0002\u01d6\u01d7\u0003\u0002\u0002\u0002\u01d6\u01d4",
    "\u0003\u0002\u0002\u0002\u01d7\u01d9\u0003\u0002\u0002\u0002\u01d8\u01d6",
    "\u0003\u0002\u0002\u0002\u01d9\u01db\u0007$\u0002\u0002\u01da\u01ca",
    "\u0003\u0002\u0002\u0002\u01da\u01d2\u0003\u0002\u0002\u0002\u01dbp",
    "\u0003\u0002\u0002\u0002\u01dc\u01e1\u0005s:\u0002\u01dd\u01e1\u0005",
    "u;\u0002\u01de\u01e1\u0005w<\u0002\u01df\u01e1\n\u0002\u0002\u0002\u01e0",
    "\u01dc\u0003\u0002\u0002\u0002\u01e0\u01dd\u0003\u0002\u0002\u0002\u01e0",
    "\u01de\u0003\u0002\u0002\u0002\u01e0\u01df\u0003\u0002\u0002\u0002\u01e1",
    "r\u0003\u0002\u0002\u0002\u01e2\u01e3\u0007^\u0002\u0002\u01e3\u01e4",
    "\t\u0003\u0002\u0002\u01e4\u01e5\u0005\u0091I\u0002\u01e5\u01e6\u0005",
    "\u0091I\u0002\u01e6t\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007^\u0002",
    "\u0002\u01e8\u01e9\u0005\u008fH\u0002\u01e9\u01ea\u0005\u008fH\u0002",
    "\u01ea\u01eb\u0005\u008fH\u0002\u01ebv\u0003\u0002\u0002\u0002\u01ec",
    "\u01ed\u0007^\u0002\u0002\u01ed\u01ee\t\u0004\u0002\u0002\u01eex\u0003",
    "\u0002\u0002\u0002\u01ef\u01f0\u0007v\u0002\u0002\u01f0\u01f1\u0007",
    "t\u0002\u0002\u01f1\u01f2\u0007w\u0002\u0002\u01f2\u01f9\u0007g\u0002",
    "\u0002\u01f3\u01f4\u0007h\u0002\u0002\u01f4\u01f5\u0007c\u0002\u0002",
    "\u01f5\u01f6\u0007n\u0002\u0002\u01f6\u01f7\u0007u\u0002\u0002\u01f7",
    "\u01f9\u0007g\u0002\u0002\u01f8\u01ef\u0003\u0002\u0002\u0002\u01f8",
    "\u01f3\u0003\u0002\u0002\u0002\u01f9z\u0003\u0002\u0002\u0002\u01fa",
    "\u01fb\u0005\u007f@\u0002\u01fb\u01fd\u0005e3\u0002\u01fc\u01fe\u0005",
    "\u007f@\u0002\u01fd\u01fc\u0003\u0002\u0002\u0002\u01fd\u01fe\u0003",
    "\u0002\u0002\u0002\u01fe\u0200\u0003\u0002\u0002\u0002\u01ff\u0201\u0005",
    "}?\u0002\u0200\u01ff\u0003\u0002\u0002\u0002\u0200\u0201\u0003\u0002",
    "\u0002\u0002\u0201\u020b\u0003\u0002\u0002\u0002\u0202\u0203\u0005\u007f",
    "@\u0002\u0203\u0204\u0005}?\u0002\u0204\u020b\u0003\u0002\u0002\u0002",
    "\u0205\u0206\u0005e3\u0002\u0206\u0208\u0005\u007f@\u0002\u0207\u0209",
    "\u0005}?\u0002\u0208\u0207\u0003\u0002\u0002\u0002\u0208\u0209\u0003",
    "\u0002\u0002\u0002\u0209\u020b\u0003\u0002\u0002\u0002\u020a\u01fa\u0003",
    "\u0002\u0002\u0002\u020a\u0202\u0003\u0002\u0002\u0002\u020a\u0205\u0003",
    "\u0002\u0002\u0002\u020b\u0213\u0003\u0002\u0002\u0002\u020c\u020d\u0007",
    "k\u0002\u0002\u020d\u020e\u0007p\u0002\u0002\u020e\u0213\u0007h\u0002",
    "\u0002\u020f\u0210\u0007p\u0002\u0002\u0210\u0211\u0007c\u0002\u0002",
    "\u0211\u0213\u0007p\u0002\u0002\u0212\u020a\u0003\u0002\u0002\u0002",
    "\u0212\u020c\u0003\u0002\u0002\u0002\u0212\u020f\u0003\u0002\u0002\u0002",
    "\u0213|\u0003\u0002\u0002\u0002\u0214\u0217\t\u0005\u0002\u0002\u0215",
    "\u0218\u0005k6\u0002\u0216\u0218\u0005m7\u0002\u0217\u0215\u0003\u0002",
    "\u0002\u0002\u0217\u0216\u0003\u0002\u0002\u0002\u0217\u0218\u0003\u0002",
    "\u0002\u0002\u0218\u0219\u0003\u0002\u0002\u0002\u0219\u021a\u0005\u007f",
    "@\u0002\u021a~\u0003\u0002\u0002\u0002\u021b\u021d\u0005\u008dG\u0002",
    "\u021c\u021b\u0003\u0002\u0002\u0002\u021d\u021e\u0003\u0002\u0002\u0002",
    "\u021e\u021c\u0003\u0002\u0002\u0002\u021e\u021f\u0003\u0002\u0002\u0002",
    "\u021f\u0080\u0003\u0002\u0002\u0002\u0220\u0224\u0005\u0083B\u0002",
    "\u0221\u0224\u0005\u0085C\u0002\u0222\u0224\u0005\u0087D\u0002\u0223",
    "\u0220\u0003\u0002\u0002\u0002\u0223\u0221\u0003\u0002\u0002\u0002\u0223",
    "\u0222\u0003\u0002\u0002\u0002\u0224\u0082\u0003\u0002\u0002\u0002\u0225",
    "\u0229\t\u0006\u0002\u0002\u0226\u0228\u0005\u008dG\u0002\u0227\u0226",
    "\u0003\u0002\u0002\u0002\u0228\u022b\u0003\u0002\u0002\u0002\u0229\u0227",
    "\u0003\u0002\u0002\u0002\u0229\u022a\u0003\u0002\u0002\u0002\u022a\u0084",
    "\u0003\u0002\u0002\u0002\u022b\u0229\u0003\u0002\u0002\u0002\u022c\u0230",
    "\u00072\u0002\u0002\u022d\u022f\u0005\u008fH\u0002\u022e\u022d\u0003",
    "\u0002\u0002\u0002\u022f\u0232\u0003\u0002\u0002\u0002\u0230\u022e\u0003",
    "\u0002\u0002\u0002\u0230\u0231\u0003\u0002\u0002\u0002\u0231\u0086\u0003",
    "\u0002\u0002\u0002\u0232\u0230\u0003\u0002\u0002\u0002\u0233\u0234\u0007",
    "2\u0002\u0002\u0234\u0236\t\u0003\u0002\u0002\u0235\u0237\u0005\u0091",
    "I\u0002\u0236\u0235\u0003\u0002\u0002\u0002\u0237\u0238\u0003\u0002",
    "\u0002\u0002\u0238\u0236\u0003\u0002\u0002\u0002\u0238\u0239\u0003\u0002",
    "\u0002\u0002\u0239\u0088\u0003\u0002\u0002\u0002\u023a\u023f\u0005\u008b",
    "F\u0002\u023b\u023e\u0005\u008bF\u0002\u023c\u023e\u0005\u008dG\u0002",
    "\u023d\u023b\u0003\u0002\u0002\u0002\u023d\u023c\u0003\u0002\u0002\u0002",
    "\u023e\u0241\u0003\u0002\u0002\u0002\u023f\u023d\u0003\u0002\u0002\u0002",
    "\u023f\u0240\u0003\u0002\u0002\u0002\u0240\u008a\u0003\u0002\u0002\u0002",
    "\u0241\u023f\u0003\u0002\u0002\u0002\u0242\u0243\t\u0007\u0002\u0002",
    "\u0243\u008c\u0003\u0002\u0002\u0002\u0244\u0245\t\b\u0002\u0002\u0245",
    "\u008e\u0003\u0002\u0002\u0002\u0246\u0247\t\t\u0002\u0002\u0247\u0090",
    "\u0003\u0002\u0002\u0002\u0248\u0249\t\n\u0002\u0002\u0249\u0092\u0003",
    "\u0002\u0002\u0002\u024a\u024c\t\u000b\u0002\u0002\u024b\u024a\u0003",
    "\u0002\u0002\u0002\u024c\u024d\u0003\u0002\u0002\u0002\u024d\u024b\u0003",
    "\u0002\u0002\u0002\u024d\u024e\u0003\u0002\u0002\u0002\u024e\u024f\u0003",
    "\u0002\u0002\u0002\u024f\u0250\bJ\u0002\u0002\u0250\u0094\u0003\u0002",
    "\u0002\u0002\u0251\u0252\u00071\u0002\u0002\u0252\u0253\u00071\u0002",
    "\u0002\u0253\u0257\u0003\u0002\u0002\u0002\u0254\u0256\n\f\u0002\u0002",
    "\u0255\u0254\u0003\u0002\u0002\u0002\u0256\u0259\u0003\u0002\u0002\u0002",
    "\u0257\u0255\u0003\u0002\u0002\u0002\u0257\u0258\u0003\u0002\u0002\u0002",
    "\u0258\u025a\u0003\u0002\u0002\u0002\u0259\u0257\u0003\u0002\u0002\u0002",
    "\u025a\u025b\bK\u0002\u0002\u025b\u0096\u0003\u0002\u0002\u0002\u025c",
    "\u025d\u00071\u0002\u0002\u025d\u025e\u0007,\u0002\u0002\u025e\u0262",
    "\u0003\u0002\u0002\u0002\u025f\u0261\u000b\u0002\u0002\u0002\u0260\u025f",
    "\u0003\u0002\u0002\u0002\u0261\u0264\u0003\u0002\u0002\u0002\u0262\u0263",
    "\u0003\u0002\u0002\u0002\u0262\u0260\u0003\u0002\u0002\u0002\u0263\u0265",
    "\u0003\u0002\u0002\u0002\u0264\u0262\u0003\u0002\u0002\u0002\u0265\u0266",
    "\u0007,\u0002\u0002\u0266\u0267\u00071\u0002\u0002\u0267\u0268\u0003",
    "\u0002\u0002\u0002\u0268\u0269\bL\u0002\u0002\u0269\u0098\u0003\u0002",
    "\u0002\u0002\u0018\u0002\u01ce\u01d6\u01da\u01e0\u01f8\u01fd\u0200\u0208",
    "\u020a\u0212\u0217\u021e\u0223\u0229\u0230\u0238\u023d\u023f\u024d\u0257",
    "\u0262\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function Protobuf3Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

Protobuf3Lexer.prototype = Object.create(antlr4.Lexer.prototype);
Protobuf3Lexer.prototype.constructor = Protobuf3Lexer;

Object.defineProperty(Protobuf3Lexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

Protobuf3Lexer.EOF = antlr4.Token.EOF;
Protobuf3Lexer.SYNTAX = 1;
Protobuf3Lexer.IMPORT = 2;
Protobuf3Lexer.WEAK = 3;
Protobuf3Lexer.PUBLIC = 4;
Protobuf3Lexer.PACKAGE = 5;
Protobuf3Lexer.OPTION = 6;
Protobuf3Lexer.OPTIONAL = 7;
Protobuf3Lexer.REQUIRED = 8;
Protobuf3Lexer.REPEATED = 9;
Protobuf3Lexer.ONEOF = 10;
Protobuf3Lexer.MAP = 11;
Protobuf3Lexer.INT32 = 12;
Protobuf3Lexer.INT64 = 13;
Protobuf3Lexer.UINT32 = 14;
Protobuf3Lexer.UINT64 = 15;
Protobuf3Lexer.SINT32 = 16;
Protobuf3Lexer.SINT64 = 17;
Protobuf3Lexer.FIXED32 = 18;
Protobuf3Lexer.FIXED64 = 19;
Protobuf3Lexer.SFIXED32 = 20;
Protobuf3Lexer.SFIXED64 = 21;
Protobuf3Lexer.BOOL = 22;
Protobuf3Lexer.STRING = 23;
Protobuf3Lexer.DOUBLE = 24;
Protobuf3Lexer.FLOAT = 25;
Protobuf3Lexer.BYTES = 26;
Protobuf3Lexer.RESERVED = 27;
Protobuf3Lexer.TO = 28;
Protobuf3Lexer.MAX = 29;
Protobuf3Lexer.ENUM = 30;
Protobuf3Lexer.MESSAGE = 31;
Protobuf3Lexer.SERVICE = 32;
Protobuf3Lexer.RPC = 33;
Protobuf3Lexer.STREAM = 34;
Protobuf3Lexer.RETURNS = 35;
Protobuf3Lexer.PROTO3_LIT_SINGLE = 36;
Protobuf3Lexer.PROTO3_LIT_DOBULE = 37;
Protobuf3Lexer.PROTO2_LIT_SINGLE = 38;
Protobuf3Lexer.PROTO2_LIT_DOBULE = 39;
Protobuf3Lexer.SEMI = 40;
Protobuf3Lexer.EQ = 41;
Protobuf3Lexer.LP = 42;
Protobuf3Lexer.RP = 43;
Protobuf3Lexer.LB = 44;
Protobuf3Lexer.RB = 45;
Protobuf3Lexer.LC = 46;
Protobuf3Lexer.RC = 47;
Protobuf3Lexer.LT = 48;
Protobuf3Lexer.GT = 49;
Protobuf3Lexer.DOT = 50;
Protobuf3Lexer.COMMA = 51;
Protobuf3Lexer.COLON = 52;
Protobuf3Lexer.PLUS = 53;
Protobuf3Lexer.MINUS = 54;
Protobuf3Lexer.STR_LIT = 55;
Protobuf3Lexer.BOOL_LIT = 56;
Protobuf3Lexer.FLOAT_LIT = 57;
Protobuf3Lexer.INT_LIT = 58;
Protobuf3Lexer.IDENTIFIER = 59;
Protobuf3Lexer.WS = 60;
Protobuf3Lexer.LINE_COMMENT = 61;
Protobuf3Lexer.COMMENT = 62;

Protobuf3Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

Protobuf3Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

Protobuf3Lexer.prototype.literalNames = [ null, "'syntax'", "'import'", 
                                          "'weak'", "'public'", "'package'", 
                                          "'option'", "'optional'", "'required'", 
                                          "'repeated'", "'oneof'", "'map'", 
                                          "'int32'", "'int64'", "'uint32'", 
                                          "'uint64'", "'sint32'", "'sint64'", 
                                          "'fixed32'", "'fixed64'", "'sfixed32'", 
                                          "'sfixed64'", "'bool'", "'string'", 
                                          "'double'", "'float'", "'bytes'", 
                                          "'reserved'", "'to'", "'max'", 
                                          "'enum'", "'message'", "'service'", 
                                          "'rpc'", "'stream'", "'returns'", 
                                          "'\"proto3\"'", "''proto3''", 
                                          "'\"proto2\"'", "''proto2''", 
                                          "';'", "'='", "'('", "')'", "'['", 
                                          "']'", "'{'", "'}'", "'<'", "'>'", 
                                          "'.'", "','", "':'", "'+'", "'-'" ];

Protobuf3Lexer.prototype.symbolicNames = [ null, "SYNTAX", "IMPORT", "WEAK", 
                                           "PUBLIC", "PACKAGE", "OPTION", 
                                           "OPTIONAL", "REQUIRED", "REPEATED", 
                                           "ONEOF", "MAP", "INT32", "INT64", 
                                           "UINT32", "UINT64", "SINT32", 
                                           "SINT64", "FIXED32", "FIXED64", 
                                           "SFIXED32", "SFIXED64", "BOOL", 
                                           "STRING", "DOUBLE", "FLOAT", 
                                           "BYTES", "RESERVED", "TO", "MAX", 
                                           "ENUM", "MESSAGE", "SERVICE", 
                                           "RPC", "STREAM", "RETURNS", "PROTO3_LIT_SINGLE", 
                                           "PROTO3_LIT_DOBULE", "PROTO2_LIT_SINGLE", 
                                           "PROTO2_LIT_DOBULE", "SEMI", 
                                           "EQ", "LP", "RP", "LB", "RB", 
                                           "LC", "RC", "LT", "GT", "DOT", 
                                           "COMMA", "COLON", "PLUS", "MINUS", 
                                           "STR_LIT", "BOOL_LIT", "FLOAT_LIT", 
                                           "INT_LIT", "IDENTIFIER", "WS", 
                                           "LINE_COMMENT", "COMMENT" ];

Protobuf3Lexer.prototype.ruleNames = [ "SYNTAX", "IMPORT", "WEAK", "PUBLIC", 
                                       "PACKAGE", "OPTION", "OPTIONAL", 
                                       "REQUIRED", "REPEATED", "ONEOF", 
                                       "MAP", "INT32", "INT64", "UINT32", 
                                       "UINT64", "SINT32", "SINT64", "FIXED32", 
                                       "FIXED64", "SFIXED32", "SFIXED64", 
                                       "BOOL", "STRING", "DOUBLE", "FLOAT", 
                                       "BYTES", "RESERVED", "TO", "MAX", 
                                       "ENUM", "MESSAGE", "SERVICE", "RPC", 
                                       "STREAM", "RETURNS", "PROTO3_LIT_SINGLE", 
                                       "PROTO3_LIT_DOBULE", "PROTO2_LIT_SINGLE", 
                                       "PROTO2_LIT_DOBULE", "SEMI", "EQ", 
                                       "LP", "RP", "LB", "RB", "LC", "RC", 
                                       "LT", "GT", "DOT", "COMMA", "COLON", 
                                       "PLUS", "MINUS", "STR_LIT", "CHAR_VALUE", 
                                       "HEX_ESCAPE", "OCT_ESCAPE", "CHAR_ESCAPE", 
                                       "BOOL_LIT", "FLOAT_LIT", "EXPONENT", 
                                       "DECIMALS", "INT_LIT", "DECIMAL_LIT", 
                                       "OCTAL_LIT", "HEX_LIT", "IDENTIFIER", 
                                       "LETTER", "DECIMAL_DIGIT", "OCTAL_DIGIT", 
                                       "HEX_DIGIT", "WS", "LINE_COMMENT", 
                                       "COMMENT" ];

Protobuf3Lexer.prototype.grammarFileName = "Protobuf3.g4";



exports.Protobuf3Lexer = Protobuf3Lexer;

