-include .env

.SECONDEXPANSION:
.SUFFIXES:

PYTHON = py -3

STORY_NAME = Psycholonials
STORY_ID = 42998


.PHONY: default
default: mspfa-online mspfa-full


define postprocess
sed -i $(1)/story.yaml -e \
  's|https://pipe.miroware.io/60e5694ca5f8ec784408eb80|https://file.garden/YOVpTKX47HhECOuA|g'
endef

.PHONY: mspfa-full
mspfa-full:
	$(PYTHON) $(TUHC_DIR)/tools/mspfa/mspfa.py $(STORY_ID)
	$(call postprocess,"$(STORY_NAME)")

.PHONY: mspfa-online
mspfa-online:
	$(PYTHON) $(TUHC_DIR)/tools/mspfa/mspfa.py $(STORY_ID) --online
	$(call postprocess,"$(STORY_NAME)_online")