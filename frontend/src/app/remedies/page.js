import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="border rounded-lg overflow-hidden mt-20">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-bold text-lg">Tests</TableHead>
            <TableHead className="text-bold text-lg">Levels</TableHead>
            <TableHead className="text-bold text-lg">Score</TableHead>
            <TableHead className="text-bold text-lg">Remedies</TableHead>
            <TableHead className="text-bold text-lg">Links to Videos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Story</TableCell>
            <TableCell>85%</TableCell>
            <TableCell>
              <ul className="space-y-1 text-sm">
                <li>Review basic algebraic concepts</li>
                <li>Practice more word problems</li>
                <li>Seek tutoring for areas of weakness</li>
              </ul>
            </TableCell>
            <TableCell>
              lorem32<br></br>
              <a
                href="https://www.youtube.com/watch?v=hq3yfQnllfQ&pp=ygUKYWJjIHZpZGVvIA%3D%3D"
                style={{ color: "red" }}
              >
                Lecture 1
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=d0Hq0fjT3r4&pp=ygUXd29yZCBzb25nIGZvciBjaGlsZHJlbiA%3D"
                style={{ color: "red" }}
              >
                Lecture 2
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=0Wrv_ZviMEc&pp=ygUZc2VudGFuY2UgZm9ybWF0aW9uIHNvbmdzIA%3D%3D "
                style={{ color: "red" }}
              >
                Lecture 3
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Word</TableCell>
            <TableCell>72%</TableCell>
            <TableCell>
              <ul className="space-y-1 text-sm">
                <li>Revisit lab techniques and protocols</li>
                <li>Attend extra lab sessions</li>
                <li>Review study materials more thoroughly</li>
              </ul>
            </TableCell>
            <TableCell>
              lorem32<br></br>
              <a
                href="https://www.youtube.com/watch?v=hq3yfQnllfQ&pp=ygUKYWJjIHZpZGVvIA%3D%3D"
                style={{ color: "red" }}
              >
                Lecture 1
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=d0Hq0fjT3r4&pp=ygUXd29yZCBzb25nIGZvciBjaGlsZHJlbiA%3D"
                style={{ color: "red" }}
              >
                Lecture 2
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=0Wrv_ZviMEc&pp=ygUZc2VudGFuY2UgZm9ybWF0aW9uIHNvbmdzIA%3D%3D "
                style={{ color: "red" }}
              >
                Lecture 3
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Letter</TableCell>
            <TableCell>90%</TableCell>
            <TableCell>
              <ul className="space-y-1 text-sm">
                <li>Continue practicing essay writing</li>
                <li>Get feedback from the instructor</li>
                <li>Improve vocabulary and grammar skills</li>
              </ul>
            </TableCell>
            <TableCell>
              lorem32<br></br>
              <a
                href="https://www.youtube.com/watch?v=hq3yfQnllfQ&pp=ygUKYWJjIHZpZGVvIA%3D%3D"
                style={{ color: "red" }}
              >
                Lecture 1
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=d0Hq0fjT3r4&pp=ygUXd29yZCBzb25nIGZvciBjaGlsZHJlbiA%3D"
                style={{ color: "red" }}
              >
                Lecture 2
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=0Wrv_ZviMEc&pp=ygUZc2VudGFuY2UgZm9ybWF0aW9uIHNvbmdzIA%3D%3D "
                style={{ color: "red" }}
              >
                Lecture 3
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Essay</TableCell>
            <TableCell>78%</TableCell>
            <TableCell>
              <ul className="space-y-1 text-sm">
                <li>Review course materials more actively</li>
                <li>Attend office hours for clarification</li>
                <li>Practice answering sample questions</li>
              </ul>
            </TableCell>
            <TableCell>
              lorem32<br></br>
              <a
                href="https://www.youtube.com/watch?v=hq3yfQnllfQ&pp=ygUKYWJjIHZpZGVvIA%3D%3D"
                style={{ color: "red" }}
              >
                Lecture 1
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=d0Hq0fjT3r4&pp=ygUXd29yZCBzb25nIGZvciBjaGlsZHJlbiA%3D"
                style={{ color: "red" }}
              >
                Lecture 2
              </a>
              <br></br>
              <a
                href="https://www.youtube.com/watch?v=0Wrv_ZviMEc&pp=ygUZc2VudGFuY2UgZm9ybWF0aW9uIHNvbmdzIA%3D%3D "
                style={{ color: "red" }}
              >
                Lecture 3
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
