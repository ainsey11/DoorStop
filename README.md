# DoorStop
Don't let your lack of backups turn your servers into doorstops


## What is DoorStop?

Doorstop is a backup software designed to remove all the elements that are terrible in other software.

No Stupidly complex configurations, simple notificaions, easy to manage and actually works.

## Architecture

Doorstop has 3 methods of backups.

1. Agent based
Agent based backups lets you install an agent on a linux or windows server, then push the files to the central backup server

2. Pull based
Doorstop has a "plugin" based pull mechanism, this allows the server to pull from services such as Office365, GSuite, Vmware, Hyper-V etc etc. Anywhere you can't install an agent.

3. Push based
If you can't install an agent, and you're restricted by firewalls, you can have the device push its backups to the DoorStop server. So technologies such as backup via e-mail, scp etc can all come into DoorStop for archiving

## Storage

The Storage of Doorstop is also plugin based, store on Tape, S3,Azure or Disk, or many more in the future!
