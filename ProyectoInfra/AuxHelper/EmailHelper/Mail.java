import java.io.*;
import java.net.*;

public class Mail {
    public static void main(String[] args) throws Exception {

        Socket socket       = new Socket("negritosmail.com", 25);
        BufferedReader in   = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out     = new PrintWriter(socket.getOutputStream(), true);

        // the return path

        out.println("HELO negritosmail.com");
        StdOut.println(in.readLine());

        out.println("MAIL From: "+args[0]);
        StdOut.println(in.readLine());

        // send to this address
        out.println("RCPT To: "+args[1]);
        StdOut.println(in.readLine());

        out.println("DATA");
        StdOut.println(in.readLine());


        out.println("Subject: "+args[2]);
        out.println(args[3]);
        out.println(".");
        StdOut.println(in.readLine());
         out.println("quit");
        // clean up
        StdOut.println(in.readLine());
        out.close();
        in.close();
        socket.close();
    }
}
