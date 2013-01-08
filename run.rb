#!/usr/bin/ruby

phpPid = Process.spawn("php -d apc.enabled=Off -S 127.0.0.1:10001")
compassPid = Process.spawn("compass watch")

trap("INT") {
[phpPid, compassPid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
exit 0
}

[phpPid, compassPid].each { |pid| Process.wait(pid) }